				  let banse = new Set();
				  client.on('guildBanAdd', function(guild) {
					guild.fetchAuditLogs().then(logs => {
					  const ser = logs.entries.first().executor;
					  if(!bane[ser.id+guild.id]) bane[ser.id+guild.id] = {
						bans: 2
					  }
					  let boner = bane[ser.id+guild.id]
				  banse.add(ser.id)
				  boner.bans = Math.floor(boner.bans+1)
				 
				 
				  setTimeout(() => {
					boner.bans = 2
					banse.delete(ser.id)
				  },8000)
				 
				  if(boner.bans > 2) {
					let roles = guild.members.get(ser.id).roles.array()
				  guild.members.get(ser.id).removeRoles(roles)
				  }
				 
					  })
					  fs.writeFile('./alpha.json', JSON.stringify(bane), (err) => {
				  if (err) console.error(err);
				  })
				 
				  })
				  client.on('guildMemberRemove', (u) => {
					  u.guild.fetchAuditLogs().then( s => {
						  var ss = s.entries.first();
						  if (ss.action == `MEMBER_KICK`) {
						  if (!data[ss.executor.id]) {
							  data[ss.executor.id] = {
							  time : 1
							};
						} else {  
							data[ss.executor.id].time+=1
						};
				  data[ss.executor.id].time = 0
				  u.guild.members.get(ss.executor.id).roles.forEach(r => {
								  r.edit({
									  permissions : []
								  });
								  data[ss.executor.id].time = 0
							  });
						  setTimeout(function(){
							  if (data[ss.executor.id].time <= 3) {
								  data[ss.executor.id].time = 0
							  }
						  })
					  };
					  });
					  fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
						  if (err) console.log(err.message);
					  });
				  });
				  client.on('roleDelete', (u) => {
					  u.guild.fetchAuditLogs().then( s => {
						  var ss = s.entries.first();
						  if (ss.action == `ROLE_DELETE`) {
						  if (!data[ss.executor.id]) {
							  data[ss.executor.id] = {
							  time : 1
							};
						} else {
							data[ss.executor.id].time+=1
						};
				  data[ss.executor.id].time = 0
				  u.guild.members.get(ss.executor.id).roles.forEach(r => {
								  r.edit({
									  permissions : []
								  });
								  data[ss.executor.id].time = 0
							  });
						  setTimeout(function(){
							  if (data[ss.executor.id].time <= 3) {
								  data[ss.executor.id].time = 0
							  }
						  },60000)
					  };
					  });
					  fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
						  if (err) console.log(err.message);
					  });
				  });
				  client.on('channelDelete', (u) => {
					  u.guild.fetchAuditLogs().then( s => {
						  var ss = s.entries.first();
						  if (ss.action == `CHANNEL_DELETE`) {
						  if (!data[ss.executor.id]) {
							  data[ss.executor.id] = {
							  time : 1
							};
						} else {
							data[ss.executor.id].time+=1
						};
				  data[ss.executor.id].time = 0
				  u.guild.members.get(ss.executor.id).roles.forEach(r => {
								  r.edit({
									  permissions : []
								  });
								  data[ss.executor.id].time = 0
							  });
						  setTimeout(function(){
							  if (data[ss.executor.id].time <= 3) {
								  data[ss.executor.id].time = 0
							  }
						  })
					  };
					  });
					  fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
						  if (err) console.log(err.message);
					  });
				  })

				let antihack = JSON.parse(fs.readFileSync('./antihack.json' , 'utf8'));//require antihack.json file
				client.on('message', message => {
					if(message.content.startsWith("-Antihack")) {
						if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
						if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
						if(!antihack[message.guild.id]) antihack[message.guild.id] = {
						  onoff: 'Off'
						}
						  if(antihack[message.guild.id].onoff === 'Off') return [message.channel.send(`**✅ The AntiHack Is __𝐎𝐍__ !**`), antihack[message.guild.id].onoff = 'On']
						  if(antihack[message.guild.id].onoff === 'On') return [message.channel.send(`**⛔ The AntiHack Is __𝐎𝐅𝐅__ !**`), antihack[message.guild.id].onoff = 'Off']
						  fs.writeFile("./antihack.json", JSON.stringify(antihack), (err) => {
							if (err) console.error(err)
							.catch(err => {
							  console.error(err);
						  });
							});
						  }
				 
						})

				  let bane = JSON.parse(fs.readFileSync('./data1.json' , 'utf8'));//require data1.json
				  client.on('guildBanAdd', function(guild) {
					guild.fetchAuditLogs().then(logs => {
					  const ser = logs.entries.first().executor;
					  if(!bane[ser.id+guild.id]) bane[ser.id+guild.id] = {
						bans: 2
					  }
					  if(antihack[message.guild.id].onoff === 'Off') return;
					  let boner = bane[ser.id+guild.id]
				  banse.add(ser.id)
				  boner.bans = Math.floor(boner.bans+1)
				 
				 
				  setTimeout(() => {
					boner.bans = 2
					banse.delete(ser.id)
				  },8000)
				 
				  if(boner.bans > 2) {
					let roles = guild.members.get(ser.id).roles.array()
				  guild.members.get(ser.id).removeRoles(roles)
				  }
				 
					  })
					  fs.writeFile('./data1.json', JSON.stringify(bane), (err) => {
				  if (err) console.error(err);
				  })
				 
				  })
				  client.on('guildMemberRemove', (u) => {
					  u.guild.fetchAuditLogs().then( s => {
						  var ss = s.entries.first();
						  if (ss.action == `MEMBER_KICK`) {
						  if (!data[ss.executor.id]) {
							  data[ss.executor.id] = {
							  time : 1
							};
							if(antihack[message.guild.id].onoff === 'Off') return;
				 
						} else {  
							data[ss.executor.id].time+=1
						};
						if(antihack[message.guild.id].onoff === 'Off') return;
				  data[ss.executor.id].time = 0
				  u.guild.members.get(ss.executor.id).roles.forEach(r => {
								  r.edit({
									  permissions : []
								  });
								  data[ss.executor.id].time = 0
							  });
						  setTimeout(function(){
							  if (data[ss.executor.id].time <= 3) {
								  data[ss.executor.id].time = 0
							  }
						  })
					  };
					  });
					  fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
						  if (err) console.log(err.message);
					  });
				  });
				  client.on('roleDelete', (u) => {
					  u.guild.fetchAuditLogs().then( s => {
						  var ss = s.entries.first();
						  if (ss.action == `ROLE_DELETE`) {
						  if (!data[ss.executor.id]) {
							  data[ss.executor.id] = {
							  time : 1
							};
							if(antihack[message.guild.id].onoff === 'Off') return;
				 
						} else {
							data[ss.executor.id].time+=1
						};
						if(antihack[message.guild.id].onoff === 'Off') return;
				 
				  data[ss.executor.id].time = 0
				  u.guild.members.get(ss.executor.id).roles.forEach(r => {
								  r.edit({
									  permissions : []
								  });
								  data[ss.executor.id].time = 0
							  });
						  setTimeout(function(){
							  if (data[ss.executor.id].time <= 3) {
								  data[ss.executor.id].time = 0
							  }
						  },60000)
					  };
					  });
					  fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
						  if (err) console.log(err.message);
					  });
				  });
				  client.on('channelDelete', (u) => {
					  u.guild.fetchAuditLogs().then( s => {
						  var ss = s.entries.first();
						  if (ss.action == `CHANNEL_DELETE`) {
						  if (!data[ss.executor.id]) {
							  data[ss.executor.id] = {
							  time : 1
							};
							if(antihack[message.guild.id].onoff === 'Off') return;
						} else {
							data[ss.executor.id].time+=1
						};
						if(antihack[message.guild.id].onoff === 'Off') return;
				  data[ss.executor.id].time = 0
				  u.guild.members.get(ss.executor.id).roles.forEach(r => {
								  r.edit({
									  permissions : []
								  });
								  data[ss.executor.id].time = 0
							  });
						  setTimeout(function(){
							  if (data[ss.executor.id].time <= 3) {
								  data[ss.executor.id].time = 0
							  }
						  })
					  };
					  });
					  fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
						  if (err) console.log(err.message);
					  });
				  })