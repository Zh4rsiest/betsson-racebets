# Betsson test task

## Foreword

If you see a lot of redundancy in the code with the classes for all the paragraphs and headings that's because I was trying to do everything the TailwindCSS way. I might not have used best practise so please, treat this as an experiment :)

## Installing

- git clone https://github.com/Zh4rsiest/betsson-racebets
- (optional) sudo chown $USER:www-data betsson-racebets
- cd betsson-racebets
- npm install
- If it throws an error about node-ass then: npm i --unsafe-perm node-sass
- npm run build


## Validating the concept

In my experience I think TailwindCSS could be a good option performance wise if built in production mode that purges every class that is not needed. On the other hand, without good configuration there are a couple of issues with it, for example when you want to write custom css. My solution was that I made a tailwind.scss file, that imports the base, components and utilities from the Tailwind library and added it as an entry point in my webpack.config.js file. This way, I only have to restart npm run watch, if I want to write in the tailwind.config.js file, but I can write my custom css without having huge load times.

Styling needs wise, It certainly can satisfy the project's needs, but with limitations - meaning that you'll have to provide custom css for sure - though, I wouldn't recommend it but I'll get to that point later.

## Understanding and maintaining TailwindCSS

On one hand I found TailwindCSS easy to use, because I barely had to write any custom css. On the other hand though, comparing it with bootstrap, there are a lot of advantages and disadvantages as well. If I mostly only want to rely on TailwindCSS then the markup will look unreadable because of too many classes on specific elements but even on general elements - if there are a lot of the same type - it is a lot more tedious to change them then to just add a class on it and write a couple lines of code and change them all together. In my opinion maintaining markup like this is not convenient at all.

## How coupled TailwindCSS is with the view layer

It is certainly something you can attach and detach at any time, since the production build of it will only contain (if configured correctly) the classes that are used in all of your html/vue/jsx/etc... files. But, development wise it can be a nuance to just change one option in its config and to restart your npm process. I know that most plugins have to be restarted after changing their config file, but TailwindCSS config contains features/properties that (especially at the start) needs to be changed more than once.

## Identifying the disadvantages

I think the biggest disadvantage is the fact that a more complex layout will result in a very unreadable markup. You could make a hybrid with adding more classes, but then again, it would kinda defeat the purpose of using as low amount of custom css as possible.
Another disadvantage would be that even though it can be customised decently, with very specific design, you'll eventually need to use custom css, for example, the tiniest font size is bigger than the one that RaceBets' menu is using.

## Conclusion

For building non complex designs for prototypes, it can be highly efficient, especially for demo purposes. For building anything that is a bit more stylish than pure minimalistic style, I think sticking to any other css framework like bootstrap and using custom css is the way to go.
