import { getValueFromDials, getHourFromValue } from '../modules/calculHour.ts'

import { useCallback, useState, useMemo } from 'react';

export default function DialForm() {
  const [moonDial, setMoonDial] = useState(1);
  const [earthDial, setEarthDial] = useState(1);
  const [sunDial, setSunDial] = useState(1);
  const [showResult, setShowResult] = useState(false);

  const handleChangeMoonDial = useCallback( async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMoonDial(parseInt(e.target.value))
  }, [])

  const handleChangeEarthDial = useCallback( async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEarthDial(parseInt(e.target.value))
  }, [])

  const handleChangeSunDial = useCallback( async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSunDial(parseInt(e.target.value))
  }, [])

  const handleShow = useCallback((e: any) => {
    e.preventDefault()
    setShowResult(true)
  }, [])

  const hourResult = useMemo( () => {
    const value = getValueFromDials(moonDial, earthDial, sunDial)
    const hour = getHourFromValue(value)
    return hour
  }, [moonDial, earthDial, sunDial])

  return (
    <>
      <h1>Calculez l'heure en Corodinsite Jupiterienne</h1>

      <form id="dial_form">

        <label htmlFor="moon_dial_select">Cadran de la lune* :</label>
        <select name="moon_dial" id="moon_dial_select" required onChange={handleChangeMoonDial}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>

        <label htmlFor="earth_dial_select">Cadran de la Terre* :</label>
        <select name="earth_dial" id="earth_dial_select" required onChange={handleChangeEarthDial}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        
        <label htmlFor="sun_dial_select">Cadran du soleil* :</label>
        <select name="sun_dial" id="sun_dial_select" required onChange={handleChangeSunDial}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>

        <button id="dial_form_button" onClick={handleShow}>Calculer</button>

        <h2>L'heure en Corodinsite Jupiterienne est : <span>{showResult ? hourResult : "???"}</span></h2>
      </form>
    </>
  )
}