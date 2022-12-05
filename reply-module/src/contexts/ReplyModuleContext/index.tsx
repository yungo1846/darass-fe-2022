import { QS } from "@toss/utils";
import { createContext, useContext } from "react";

interface ContextProps {
  url: string;
  projectId: string;
}

const ReplyModuleContext = createContext<ContextProps | null>(null);

interface ReplyModuleContextProviderProps {
  children: React.ReactNode;
}

export function ReplyModuleProvider({
  children,
}: ReplyModuleContextProviderProps) {
  const { url, projectId } = QS.parse<{ url: string; projectId: string }>(
    window.location.search
  );

  return (
    <ReplyModuleContext.Provider value={{ url, projectId }}>
      {children}
    </ReplyModuleContext.Provider>
  );
}

export function useReplyModuleContext() {
  const context = useContext(ReplyModuleContext);

  if (context == null) {
    throw new Error("useProvider는 AppProvider 내부에서만 사용할 수 있습니다.");
  }

  return context;
}
