const ps = require('ps-node')

const deasync = require('deasync')

const kill = lookup_options => {
	var ready = false

	ps.lookup(lookup_options,
	(err, psList) => {
		if(err) throw err

		var count = psList.length

		if(count == 0) ready = true

		psList.forEach((p) => {
			ps.kill(p.pid, (err) => {
				if (err && err != "Error: kill ESRCH") {
					// "ESRCH" means "No process or process group can be found corresponding to that specified by pid."
					// so it can be ignored as it means the process terminated by itself
					console.log(`err='${err}'`)
					throw err
				}

				count -= 1
				if(count == 0) ready = true
			})
		})
	})

	deasync.loopWhile(() => !ready)
	return 
}

module.exports = kill
