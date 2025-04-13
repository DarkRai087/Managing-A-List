export const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  

  const originalEnd = res.end;
  
 
  res.end = function() {
    console.log(`[${new Date().toISOString()}] Response Status: ${res.statusCode}`);
    // Call the original
    originalEnd.apply(res, arguments);
  };
  
  next();
};