export function sanitizeUpdatePayload<T extends Record<string, any>>(
  obj: T
): Partial<T> {
  const fieldsToRemove = [
    "id",
    "createdAt",
    "updateAt",
    "removedAt",
  ];

  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => {
      // Remove campos específicos
      if (fieldsToRemove.includes(key)) {
        return false;
      }

      // Remove null e undefined
      if (value === null || value === undefined) {
        return false;
      }

      // Remove string vazia ou apenas espaços
      if (typeof value === "string" && value.trim() === "") {
        return false;
      }

      return true;
    })
  ) as Partial<T>;
}