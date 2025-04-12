import { SerializedError } from "@reduxjs/toolkit";

export interface ApiError extends SerializedError {
  reason?: string;
}

export interface IApiSlice<T = unknown> {
  data?: T;
  fetching: boolean;
  error?: ApiError;
  canShowMore?: boolean;
}