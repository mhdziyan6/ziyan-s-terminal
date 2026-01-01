import { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionWeek {
  days: ContributionDay[];
}

const GITHUB_USERNAME = 'ziyandaniel';

// Generate contribution data structure
const generateEmptyGrid = (): ContributionWeek[] => {
  const weeks: ContributionWeek[] = [];
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 364);

  let currentDate = new Date(startDate);
  // Adjust to start from Sunday
  currentDate.setDate(currentDate.getDate() - currentDate.getDay());

  for (let week = 0; week < 53; week++) {
    const days: ContributionDay[] = [];
    for (let day = 0; day < 7; day++) {
      days.push({
        date: currentDate.toISOString().split('T')[0],
        count: 0,
        level: 0,
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }
    weeks.push({ days });
  }

  return weeks;
};

const getLevel = (count: number): 0 | 1 | 2 | 3 | 4 => {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 10) return 3;
  return 4;
};

export const GitHubActivity = () => {
  const [contributions, setContributions] = useState<ContributionWeek[]>(generateEmptyGrid());
  const [totalContributions, setTotalContributions] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        // Using the public GitHub contributions API
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch contributions');
        }

        const data = await response.json();

        if (data.contributions) {
          const contributionMap = new Map<string, number>();
          let total = 0;

          data.contributions.forEach((day: { date: string; count: number }) => {
            contributionMap.set(day.date, day.count);
            total += day.count;
          });

          setTotalContributions(total);

          // Map to our grid structure
          const updatedWeeks = generateEmptyGrid();
          updatedWeeks.forEach((week) => {
            week.days.forEach((day) => {
              const count = contributionMap.get(day.date) || 0;
              day.count = count;
              day.level = getLevel(count);
            });
          });

          setContributions(updatedWeeks);
        }
      } catch (err) {
        console.error('Error fetching contributions:', err);
        setError('Unable to load contribution data');
        // Generate some sample data for display
        const sampleWeeks = generateEmptyGrid();
        let total = 0;
        sampleWeeks.forEach((week) => {
          week.days.forEach((day) => {
            const random = Math.random();
            if (random > 0.7) {
              const count = Math.floor(Math.random() * 8) + 1;
              day.count = count;
              day.level = getLevel(count);
              total += count;
            }
          });
        });
        setContributions(sampleWeeks);
        setTotalContributions(total);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContributions();
  }, []);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Mon', 'Wed', 'Fri'];

  // Calculate month labels positions
  const getMonthLabels = () => {
    const labels: { month: string; position: number }[] = [];
    let lastMonth = -1;

    contributions.forEach((week, weekIndex) => {
      const firstDayOfWeek = new Date(week.days[0].date);
      const month = firstDayOfWeek.getMonth();

      if (month !== lastMonth) {
        labels.push({ month: months[month], position: weekIndex });
        lastMonth = month;
      }
    });

    return labels;
  };

  return (
    <section id="github" className="py-20 md:py-28 bg-surface-1">
      <div className="section-container">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="section-subtitle mb-2">// developer_activity</p>
            <h2 className="section-title">GitHub Contributions</h2>
          </div>

          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={18} />
            @{GITHUB_USERNAME}
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="card-elevated overflow-x-auto">
          {isLoading ? (
            <div className="h-32 flex items-center justify-center">
              <div className="text-muted-foreground font-mono text-sm">Loading contributions...</div>
            </div>
          ) : (
            <>
              {/* Stats */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-semibold">{totalContributions.toLocaleString()}</span> contributions in the last year
                </p>
                {error && (
                  <p className="text-xs text-terminal-warn">{error}</p>
                )}
              </div>

              {/* Contribution grid */}
              <div className="relative">
                {/* Month labels */}
                <div className="flex ml-8 mb-2">
                  {getMonthLabels().map((label, index) => (
                    <div
                      key={index}
                      className="text-xs text-muted-foreground absolute"
                      style={{ left: `${label.position * 14 + 32}px` }}
                    >
                      {label.month}
                    </div>
                  ))}
                </div>

                <div className="flex gap-1 mt-6">
                  {/* Day labels */}
                  <div className="flex flex-col gap-1 mr-2 pt-0">
                    {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => (
                      <div
                        key={dayIndex}
                        className="h-3 text-xs text-muted-foreground flex items-center"
                      >
                        {dayIndex % 2 === 1 ? days[Math.floor(dayIndex / 2)] : ''}
                      </div>
                    ))}
                  </div>

                  {/* Grid */}
                  <div className="flex gap-[3px]">
                    {contributions.map((week, weekIndex) => (
                      <div key={weekIndex} className="flex flex-col gap-[3px]">
                        {week.days.map((day, dayIndex) => (
                          <div
                            key={`${weekIndex}-${dayIndex}`}
                            className={`contribution-cell contribution-${day.level}`}
                            title={`${day.date}: ${day.count} contributions`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legend */}
                <div className="flex items-center justify-end gap-2 mt-4">
                  <span className="text-xs text-muted-foreground">Less</span>
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`contribution-cell contribution-${level}`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground">More</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
