import { normalizeTasks } from './normalize.mjs';
import { formatTask } from './format.mjs';

export function renderTasks(records) {
  const lines = normalizeTasks(records).map(formatTask);
  return lines.length === 0 ? '' : `${lines.join('\n')}\n`;
}
