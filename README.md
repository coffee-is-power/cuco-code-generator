# Cuco code generator
A CLI for the cuco [unlock code generator](https://cuco.inforlandia.pt/ucode)
# Why?
This is useful if your computer has cuco, but the keys are outdated and you can't update it for some reason, so it asks you the code everytime your computer boots.  
So this program is intended to be used on Termux with node, and it's really easy to setup.

# Usage
```
# Clone the repo
$ git clone https://github.com/coffee-is-power/cuco-code-generator
$ cd cuco-code-generator
# Install Dependencies
$ npm install
# Run the cli
$ node . <usage counter>
```
The usage counter is the number of times you booted your computer or waken up your computer, and is displayed on the code prompt in hexadecimal
# Global Installation
You can also install the cli globally with:
```
$ npm install -g git+https://github.com/coffee-is-power/cuco-code-generator.git
```

