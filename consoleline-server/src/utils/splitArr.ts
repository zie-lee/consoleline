export default function (list: Array<any>, size: number) {
  if (list.length <= size) return list;
  const count = Math.ceil(list.length / size);
  let groupNum = 1;
  const result = [];

  while (groupNum <= count) {
    result.push(list.slice((groupNum - 1) * size, groupNum * size));
    groupNum++;
  }

  return result;
}
