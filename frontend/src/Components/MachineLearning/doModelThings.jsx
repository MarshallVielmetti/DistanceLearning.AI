export default async function doPrediction(model, tensor) {
  let val = model.predict(tensor);
  console.log(val);
  return val;
}
