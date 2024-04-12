

// a long rt request
const getData1 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    data: "data1"
  }
}

// a very long rt request
const getData2 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    data: "data2"
  }
}

export const getData1Key = "getData1";
export const getData2Key = "getData2";

const streamRequests = {
  [getData1Key]: getData1,
  [getData2Key]: getData2
}

export default streamRequests;