import { PERMISSIONS } from "../utils/permission-map";

const hasPermission = ({ permissions, scopes }) => {
  const scopesMap = {};
  scopes.forEach((scope) => {
    scopesMap[scope] = true;
  });

  return permissions?.some((permission) => scopesMap[permission]);
};

// function useGetRole() {
//   return { role: "viewer" };
// }

export const ROLES = {
  viewer: "VIEWER",
  editor: "EDITOR",
  owner: "OWNER",
};

export default function PermissionsGate({
  children,
  scopes = [],
  RenderError = () => <></>,
}) {
  // const { role } = useGetRole();
  const permissions = PERMISSIONS[ROLES.viewer];

  console.log(permissions);

  const permissionGranted = hasPermission({ permissions, scopes });

  if (!permissionGranted) return <RenderError />;

  return <>{children}</>;
}
