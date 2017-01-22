var config = {
   entry: './main.js',
	
   output: {
      path:'./',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         { test: /\.css$/, loader: "style-loader!css-loader" },
         { test: /\.png$/, loader: "file-loader" },
         { test: /\.gif$/, loader: "file-loader" },
         { test: /\.jpg$/, loader: "file-loader" },
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;