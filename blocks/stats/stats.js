/**
 * Stats Block
 * Displays statistics with large numbers and labels.
 * Supports 'dark' variant for dark background styling.
 *
 * Usage:
 * - Row 1: Stat number
 * - Row 2: Stat label
 * Repeat for each stat.
 *
 * Add class 'dark' to the block for dark variant.
 */

export default function decorate(block) {
  const stats = [];
  const rows = [...block.children];

  for (let i = 0; i < rows.length; i += 2) {
    const numberCell = rows[i];
    const labelCell = rows[i + 1];

    if (!numberCell || !labelCell) break;

    const number = numberCell.firstElementChild?.textContent.trim() || '';
    const label = labelCell.firstElementChild?.textContent.trim() || '';

    if (number && label) {
      stats.push({ number, label });
    }
  }

  // Clear the block
  block.textContent = '';

  // Create stats container
  const container = document.createElement('div');
  container.className = 'stats-container';

  // Build stats grid
  stats.forEach(({ number, label }) => {
    const statDiv = document.createElement('div');
    statDiv.className = 'stat-item';

    const numberEl = document.createElement('div');
    numberEl.className = 'stat-number';
    numberEl.textContent = number;
    numberEl.setAttribute('aria-label', `Statistic: ${number}`);

    const labelEl = document.createElement('div');
    labelEl.className = 'stat-label';
    labelEl.textContent = label;

    statDiv.append(numberEl, labelEl);
    container.append(statDiv);
  });

  block.append(container);
}
