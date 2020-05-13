import React, { useState, useEffect } from 'react';
import Card from '../components/Card/Card'
const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=8d9a4414'

function List() {
	const [datos, setDatos] = useState([])
	const [msg, setMsg] = useState({
		searchT: '',
		error: ''
	})

	async function fetchData() {
		const url = await fetch(`${API}&s=Batman`)
		const restJSON = await url.json()
		setDatos(restJSON.Search)
	}

	useEffect(() => {
		fetchData()
	}, [])



	const handleSubmit = async (e) => {
		e.preventDefault()

		const url2 = await fetch(`${API}&s=${msg.searchT}`)
		const data = await url2.json()

		if(!data.Search) {
			return setMsg({
				error: 'Not found'
			})
		}

		setDatos(data.Search)
		setMsg({ searchT: '', error: '' })
	}

	const handleChange = (e) => {
		setMsg({
			searchT: e.target.value
		})
	}

	const error = msg.error
	const etiquet = <div className="col-md-4 offset-md-4 p-4"><h1 style={{'marginLeft': '60px'}}>{error}</h1></div>
	
	return (
		<>
			<div className="row">
				<div className="col-md-4 offset-md-4 p-4">
					<form onSubmit={handleSubmit}>
						<input 
							type="text" 
							className="form-control"
							placeholder="Search"
							name="searchT"
							onChange={handleChange}
							value={msg.searchT}
							autoFocus
						/>
					</form>
				</div>
			</div>
			<div className="row">
				{	msg.error ? etiquet :
					datos.map((movie, i) => {
						return <Card movies={movie} key={i}/>
					})
				}	
			</div>
		</>
	)
}


export default List;