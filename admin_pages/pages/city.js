import {loadFirebase} from '../lib/db'
export default class AreaInput extends React.Component{
    static async getInitialProps() {
        let firebase = await loadFirebase() 
        let result2 = await new Promise((resolve, reject) => {
            firebase.firestore().collection('area')
              .limit(10)
              .get()
              .then(snapshot => {
                console.log(snapshot)
                let data2 = []
                snapshot.forEach((doc) => {
                  data2.push(
                    Object.assign({
                      id: doc.id,
                      data : doc.data()
                    })
                  )
                })
                console.log("data2")
                resolve(data2)
              })
              .catch(error => {
                reject([])
              })
          })
          return {area: result2}
      }
    state = {
        cities : [
            "fukuoku",
            "Kittakyushu",
            "Kurume",
            "Lizuka",
            "Omuta",
            "Kasuga",
            "Chikushino",
            "Onojo",
            "Munakata",
            "Itoshima",
            "Dazaifu",
            "Yukuhashi",
            "yanagawa",
            "Yame",
            "Fukutsu",
            "Ogori",
            "Koga",
            "Nogata",
            "Asakura",
            "Nakagawa",
            "Tagawa",
            "Chikugo",
            "Kasuya",
            "Shime",
            "Nakama",
            "kama",
            "Miyama",
            "Umi",
            "kanda",
            "okawa",
            "okagaki",
            "sasaguri",
            "shingu",
            "Ukiha",
            "Chikuzen",
            "Mizumaki",
            "Miyawaka",
            "Sue",
            "Buzen",
            "Fukuchi",
            "Miyako",
            "Hirokawa",
            "Onga",
            "Chikujo",
            "kawasaki",
            "kurate",
            "tachiarai",
            "ashiya",
            "Oki",
            "Keisen",
            "Kawara"
        ],
    }
    handleChange = (event)=>{
        console.log('calling handlechange')
        this.setState({[event.target.name] : event.target.value})
        console.log(event.target.value)
    }
    handleSubmit = (event) => {
        console.log(this.state)
        event.preventDefault()
        for(var i = 0;i<this.state.cities.length;i++){
            try{
                let firebase = loadFirebase() 
                firebase.firestore().collection('city').add({cityName : this.state.cities[i], AREAID : this.state.area})
            }catch (error){
                console.log(error)
            }
        }
    } 
    render (){
        const area = this.props.area
        console.log(area)
        return (
            <form>
                <select name="area" onChange={this.handleChange}>
                    {area && area.map(Area => (
                        <option value={Area.id}>{Area.data.areaName}</option>
                    ))}
                </select>
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}