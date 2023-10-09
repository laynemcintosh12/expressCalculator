const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const ExpressError = require('./expressError'); 
const { calculateMean, calculateMedian, calculateMode } = require('./functions');

app.use(express.json());


// Mean Route
app.get('/mean', (req, res, next) => {
  const nums = req.query.nums;
  if (!nums) {
    return next(new ExpressError('nums are required.', 400));
  }
  const mean = calculateMean(nums);
  if (isNaN(mean)) {
    return next(new ExpressError(`${nums} is not a number.`, 400));
  }
  res.json({ operation: 'mean', value: mean });
});

// Median Route
app.get('/median', (req, res, next) => {
  const nums = req.query.nums;
  if (!nums) {
    return next(new ExpressError('nums are required.', 400));
  }
  const median = calculateMedian(nums);
  if (isNaN(median)) {
    return next(new ExpressError(`${nums} is not a number.`, 400));
  }
  res.json({ operation: 'median', value: median });
});

// Mode Route
app.get('/mode', (req, res, next) => {
  const nums = req.query.nums;
  if (!nums) {
    return next(new ExpressError('nums are required.', 400));
  }
  const mode = calculateMode(nums);
  if (isNaN(mode)) {
    return next(new ExpressError(`${nums} is not a number.`, 400));
  }
  res.json({ operation: 'mode', value: mode });
});




// Error handling middleware
app.use((err, req, res, next) => {
  const { status = 500, message = 'Something went wrong' } = err;
  res.status(status).json({ error: message });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



module.exports = app; 
