export interface Host {
  id: number;
  ip: string;
  is_available: boolean;
  per_loss: number;
  avg_latency: number;
  jitter: number;
  max_latency: number;
  min_latency: number;
  updated: Date;
}

export interface HostsRequest<T> {
  data?: T ;
  error: string | null;
  success: boolean;
}

