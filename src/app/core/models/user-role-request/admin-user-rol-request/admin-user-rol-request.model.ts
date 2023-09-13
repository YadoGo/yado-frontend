export interface AdminUserRoleRequestDto {
  id: string;
  userId: string;
  username: string;
  roleId: number;
  requestedRoleName: string;
  requestedAt: Date;
  lastStatusUpdate: Date;
  status: string;
  approvedByUserId: string | null;
  approvedByUsername: string | null;
  message: string | null;
}
