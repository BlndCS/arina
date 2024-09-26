import { RouterProviderType } from "@/types/global";

export default function RootRouterProvider({ Component }: RouterProviderType) {
  return <Component />;
}
