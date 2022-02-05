# react_fundamentals
React App from Tyler McGinnis React Fundamentals Course

you can follow the course materials from [here](https://github.com/tylermcginnis/react-fundamentals)


### FYI
if you have a sublime version below 3106 like mine `build 3103` then you won't be able to get react through package control
 what I did was:

 ```

$ cd /Users/(username)/Library/Application\ Support/Sublime\ Text\ 3/Packages/  
$ git clone https://github.com/babel/babel-sublime
$ mv babel-sublime Babel
 ```
after this step I was able to install the package

 or you can use this [link](https://github.com/babel/babel-sublime/issues/327) to figure out the problem that you might be having. 

 axios is promise based http client, this is what we are going to use send http request to our github api

 notes can be found [here](notes) from the class tutorials

### Workarounds for global installations

`Error: EACCES: permission denied, rename '/usr/local/lib/node_modules/npm'`
fixed by
`sudo chown -R $USER /usr/local/lib/node_modules`