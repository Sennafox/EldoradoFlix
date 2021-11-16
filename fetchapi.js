
    async function getContent() {
        try {
            const response = await fetch('http://localhost:4567/')
            console.log(response)   
        } catch (error) {
            console.log("eroooou")
        }
    }
    
    getContent()
