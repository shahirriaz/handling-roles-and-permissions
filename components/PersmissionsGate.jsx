import { PERMISSIONS } from "../utils/permission-map";

const hasPermission = ({ permissions, scopes }) => {
  const scopesMap = {};
  scopes?.forEach((scope) => {
    scopesMap[scope] = true;
  });

  return permissions?.some((permission) => scopesMap[permission]);
};

function useGetRole() {
  return { role: "VIEWER" };
}
export default function PermissionsGate({
  children,
  scopes = [],
  RenderError = () => <></>,
}) {
  const { role } = useGetRole();
  const permissions = PERMISSIONS[role];

  const permissionGranted = hasPermission({ permissions, scopes });

  if (!permissionGranted) return <RenderError />;

  return <>{children}</>;
}
