const model = tf.sequential();

// hidden layer creation
model.add(tf.layers.dense({inputShape:[4], units:8, activation: "relu"}));

// output layer creation
model.add(tf.layers.dense({units:1, activation: "softmax"}))

model.compile(
    {
        optimizer: "sgd",
        loss: "categoricalCrossentropy",
        metrics: ["accuracy"]
    }
)


const data = tf.tensor2d([1,2,3,4], [1,4])

const labels = ef.tensor2d([10], [1,1])

model.fit(data, labels);

model.predict(tf.tensor2d([1,2,3,10], [1,4]));

/*
// ------------------------------------
const input = tf.input({shape:[4]});
const hiddenLayer = tf.layers.dense({units: 8, activation : "relu"}).apply(input);
const outputLayer = tf.layers.dense({units: 2, activation: "softmax"}).apply(hiddenLayer);
const modelFunctional = tf.model({inputs: input, outputs: outputLayer}); 
*/