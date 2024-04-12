import streamRequests from "./data";


const mockClientPromise = () => {
  const _result = {} as Record<string,Promise<any>> ;
  const keys = Object.keys(streamRequests);
  console.log('keys',keys);
  for(const key of keys){
    _result[key] = Promise.resolve();
  }
  console.log('_result ',_result )
  return _result;
}

let streamResults: Record<string,Promise<any>> = typeof window === undefined ? {}: mockClientPromise();

export const getStreamResults = () => streamResults;

export const setStreamResults = (streamResults_: Record<string,Promise<any>>) => {
  streamResults = streamResults_;
}