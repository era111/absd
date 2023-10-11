<script>
  let data = {};
  let selectedF = 'USD'
  let selectedS = 'AED'
  let answerF= 0;
  let answerS= 0;
	const fet = (async () => {
		const response = await fetch('https://v6.exchangerate-api.com/v6/8939c45d21c9c66085fa91c8/latest/USD')
    let prom = await response.json()
    data = prom.conversion_rates
    return data
	})()

  function handleFirstCHange(e) {
    answerS  = e.target.value * data[selectedS] / data[selectedF]
  }

  function handleSecondCHange(e) {
    answerF  = e.target.value * data[selectedF] / data[selectedS]
  }

  function handleFselect() {
    answerS  =answerF* data[selectedS] / data[selectedF]
  }
    function handleSselect() {
    answerF  = answerS * data[selectedF] / data[selectedS]
  }

</script>

	<select id="f_sel" bind:value={selectedF} on:change={handleFselect}>
		{#each Object.entries(data) as [valute, count]}
			<option value={valute}>
				{valute}
			</option>
		{/each}
	</select>

<input value={answerF}  id="f_input" on:input={handleFirstCHange}/>

 	<select id="s_sel" bind:value={selectedS} on:change={handleSselect}>
		{#each Object.entries(data) as [valute, count]}
			<option value={valute}>
				{valute}
			</option>
		{/each}
	</select>

<input id="s_input" value={answerS} on:input={handleSecondCHange}/>
