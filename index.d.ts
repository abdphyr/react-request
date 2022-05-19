export declare function useGet<T>(url: string, headers?: Pick<RequestInit, "headers">):{
  data: T | null;
  error: {
      message: string | null;
  };
  isLoading: boolean;
  isError: boolean;
}

export declare function useChange<ReqT=any, ResT=unknown>(url: string, reqInit: RequestInit): {
  change: (data: ReqT, options?: {
    onSuccess?: (data: ResT) => void,
    onError?: (error: {
      message: string | null;
    }) => void
  }) => Promise<void>;
  data: ResT | null;
  error: {
    message: string | null;
  };
  isLoading: boolean;
  isError: boolean;
}