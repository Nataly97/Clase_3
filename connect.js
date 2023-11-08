const connect = () =>{
    console.log(process.env.CONNECTION_MONGOBD)
    mongoose.connect(process.env.CONNECTION_MONGOBD)
        .then(() => console.log('DB Connected!'))
}