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

export interface HostsRequest {
  data?: Host[] ;
  error: string | null;
  success: boolean;
}

export interface OneHostRequest {
  data?: Host;
  error: string | null;
  success: boolean;
}
