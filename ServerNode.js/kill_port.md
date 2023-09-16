netstat -ano | findstr :<PORT>
netstat -ano | findstr :4000

TCP 0.0.0.0:4000  0.0.0.0:0  LISTENING  11520

taskkill /PID <PID> /F
taskkill /PID 11520 /F

> taskkill is not working in some git bash terminal