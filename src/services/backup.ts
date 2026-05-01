import { HistoryItem, BackupData } from "../types/history";

export function exportResults(results: HistoryItem[]) {
  const data: BackupData = {
    version: 1,
    exportedAt: new Date().toISOString(),
    results,
  };

  downloadJson(data);
}

export function downloadJson(data: BackupData) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `tarot-backup-${Date.now()}.json`;
  a.click();

  URL.revokeObjectURL(url);
}

export async function importResults(file: File): Promise<HistoryItem[]> {
  const text = await file.text();
  const parsed = JSON.parse(text);

  validateBackup(parsed);

  return parsed.results;
}

export function validateBackup(data: any) {
  if (!data?.version) throw new Error("백업 파일 형식 오류");
  if (!Array.isArray(data.results)) throw new Error("results 누락");
}
