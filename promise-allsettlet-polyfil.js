Promise.allSettled = function (promises) {
  let mappedPromises = promises.map((p) => {
    return p
      .then((val) => {
        return { status: "fulfilled", val };
      })
      .catch((reason) => {
        return { status: "failed", reason };
      });
  });
  return Promise.all(mappedPromises);
};
