var rank = [[2, 3], [4, 5]];

var shape = [2,2];

var dataType = "int32"

var tensorData = tf.tensor(rank);

console.log(tensorData.toString());

const a = tf.tensor([1, 2, 3, 4]);
const b = tf.tensor([10, 20, 30, 40]);

a.sub(b).print();  // or tf.add(a, b)

