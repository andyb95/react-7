// import React, {useState, useEffect} from 'react'
// import axios from 'axios'

// const Pokemon = props => {  
//   const [pokemon, setPokemon] = useState([])
//   const [reqUrl, setReqUrl] = useState('https://pokeapi.co/api/v2/pokemon')
//     prev
//   useEffect(() => {
//     axios.get(reqUrl).then((res)=> {
//       setReqUrl(res.data.next)
//       setPokemon(res.data.results)
//     })
//   }, [page])

//   return <div>
//     {JSON.stringify(pokemon)}
//     <button onClick={() => setPage(page -1)}>Previous</button>
//     <button onClick={() => setPage(page + 1)}>Next</button>
//   </div>
// }

// export default Pokemon