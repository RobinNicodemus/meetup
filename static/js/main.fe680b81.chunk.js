(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],{21:function(e,t,n){e.exports=n(46)},26:function(e,t,n){},27:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(19),o=n.n(r),s=(n(26),n(2)),c=n(3),u=n(5),l=n(4),d=(n(27),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={showDetails:!1},e.toggleDetails=function(){e.setState({showDetails:!e.state.showDetails})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.event,t=e.group.name,n=e.venue;return i.a.createElement("div",{className:"event"},i.a.createElement("div",{className:"eventHead"},i.a.createElement("p",{className:"eventTitle"},e.name),i.a.createElement("div",{className:"eventDate"},e.local_date)),!this.state.showDetails&&i.a.createElement("div",{className:"descriptionStub",dangerouslySetInnerHTML:{__html:e.description}}),this.state.showDetails&&i.a.createElement("div",{className:"eventDetails"},t&&i.a.createElement("div",{className:"eventGroup"},t),i.a.createElement("div",{className:"eventDescription",dangerouslySetInnerHTML:{__html:e.description}}),i.a.createElement("div",{className:"eventFooter"},i.a.createElement("div",{className:"eventTime"},e.local_time),n&&i.a.createElement("div",{className:"eventPlace"},i.a.createElement("div",{className:"eventVenue"},n.name),i.a.createElement("div",{className:"eventAddress"},n.address_1)))),i.a.createElement("button",{onClick:this.toggleDetails,className:"detailsButton"},"Details"))}}]),n}(a.Component)),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement("ul",{className:"EventList"},this.props.events.map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(d,{event:e}))})))}}]),n}(a.Component),p=n(6),_=n.n(p),h=n(7),v=[{created:1595496883e3,duration:504e5,id:"xlnqvrybckbjc",name:"55qm f\xfcr Dein Meetup",date_in_series_pattern:!1,status:"upcoming",time:15957432e5,local_date:"2020-07-26",local_time:"08:00",updated:1595496911e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:1,venue:{id:25923646,name:"Fraunbergstudio",lat:48.10029602050781,lon:11.545408248901367,repinned:!1,address_1:"Fraunbergstrasse 3",city:"M\xfcnchen",country:"de",localized_country_name:"Deutschland"},is_online_event:!1,group:{created:1546957368e3,name:"FraunbergStudio Vermietung",id:30873151,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Fraunbergtudio",who:"Selbstst\xe4ndige",localized_location:"M\xfcnchen, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/Fraunbergtudio/events/xlnqvrybckbjc/",description:"<p>Du suchst noch nach der geeigneten Location f\xfcr Dein Meetup? Diesen Sonntag oder auch zu einem anderen Zeitpunkt? Dann melde Dich gerne beim FraunbergStudio.de in M\xfcnchen</p> ",how_to_find_us:"U3 Thalkirchen/Tierpark",visibility:"public",member_pay_fee:!1},{created:158046574e4,duration:72e5,id:"zkdpvrybclbfb",name:"Muenchner Brainstormers Club ONLINE",date_in_series_pattern:!1,status:"upcoming",time:15964749e5,local_date:"2020-08-03",local_time:"19:15",updated:1595312029e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:6,venue:{id:26903444,name:"Online",lat:48.13512420654297,lon:11.58198070526123,repinned:!0,address_1:"Online Adresse noch nicht verf\xfcgbar",city:"M\xfcnchen",country:"de",localized_country_name:"Deutschland"},is_online_event:!1,group:{created:1444592791e3,name:"Toastmasters Clubs in and around Munich",id:19017360,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Toastmasters-Clubs-in-and-around-Munich",who:"Toastmasters",localized_location:"M\xfcnchen, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/Toastmasters-Clubs-in-and-around-Munich/events/zkdpvrybclbfb/",description:"...",how_to_find_us:"Bitte link per e-mail anfragen an: VP-PR@munich-brainstormers.de",visibility:"public",member_pay_fee:!1},{created:1594411842e3,duration:36e5,id:"271846803",name:"15x4 Chit-Chat Sessions 4: Dreams",date_in_series_pattern:!1,status:"upcoming",time:1597338e6,local_date:"2020-08-13",local_time:"19:00",updated:1594411842e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:12,venue:{id:26906060,name:"Online-Event",repinned:!1,country:"",localized_country_name:""},is_online_event:!0,group:{created:1495653219e3,name:"15x4 Munich \u2014 Share Your Knowledge!",id:23987389,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"15x4munich",who:"Members",localized_location:"M\xfcnchen, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/15x4munich/events/271846803/",description:"",how_to_find_us:"https://zoom.us/j/91452031312",visibility:"public",member_pay_fee:!1},{created:1592158899e3,duration:72e5,id:"271294595",name:"Ulysses (Chps. 9 - 14) - James Joyce",rsvp_limit:11,date_in_series_pattern:!1,status:"upcoming",time:15965604e5,local_date:"2020-08-04",local_time:"19:00",updated:159527618e4,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:11,is_online_event:!1,group:{created:1520326534e3,name:"The Classic-Novels-You-Should-Have-Read-Already Bookclub",id:27741411,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Classic-Literature-for-the-Dramatically-Stunted",who:"Members",localized_location:"M\xfcnchen, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/Classic-Literature-for-the-Dramatically-Stunted/events/271294595/",description:"",visibility:"public",member_pay_fee:!1},{created:1581597488e3,duration:108e5,id:"268680682",name:"Sauerteigbrot backen am 01.08. um 15:30 Uhr",date_in_series_pattern:!1,status:"upcoming",time:15962886e5,local_date:"2020-08-01",local_time:"15:30",updated:1581597488e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:1,venue:{id:26662106,name:"Atlanta Haus",lat:48.119056701660156,lon:11.550241470336914,repinned:!0,address_1:"Gotzinger Str. 48",city:"M\xfcnchen",country:"de",localized_country_name:"Deutschland"},is_online_event:!1,group:{created:1569843981e3,name:"Veranstaltungen rund ums Backen in M\xfcnchen",id:32829879,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Veranstaltungen-rund-ums-Backen-in-Munchen",who:"Mitglieder",localized_location:"M\xfcnchen, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/Veranstaltungen-rund-ums-Backen-in-Munchen/events/268680682/",description:"",visibility:"public",member_pay_fee:!1},{created:1595602085e3,duration:72e5,id:"272125107",name:"Motivation",rsvp_limit:10,date_in_series_pattern:!1,status:"upcoming",time:15959952e5,local_date:"2020-07-29",local_time:"06:00",updated:1595602085e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:2,venue:{id:26389897,name:"Westpark M\xfcnchen",lat:48.122718811035156,lon:11.509337425231934,repinned:!0,city:"Munich",country:"de",localized_country_name:"Deutschland"},is_online_event:!1,group:{created:1594709748e3,name:"Early Discussions in M\xfcnchen",id:33963100,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"early-discussions",who:"Members",localized_location:"M\xfcnchen, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/early-discussions/events/272125107/",description:"<p>Hi all,</p> <p>let us walk in the park, starting at the fountain of Rosengarten in Westpark, near the restaurant Wirtshaus am Rosengarten.</p> <p>We will be discussing how motivation works for each of us. How long it lasts, what influences it, and what inspires us. Let's share our observation and experience in a friendly atmosphere under the rising sun.</p> <p>Make sure to write me a PM that you are joining. In case of rain the event might be postponed to another day.</p> <p>We start at 06:00 sharp, so be punctual. See you!</p> ",visibility:"public",member_pay_fee:!1},{created:1594997628e3,duration:72e5,id:"271985114",name:"M\xfcnchen lernt Open Space",date_in_series_pattern:!1,status:"upcoming",time:15995808e5,local_date:"2020-09-08",local_time:"18:00",updated:1594998364e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:10,venue:{id:26906060,name:"Online-Event",repinned:!1,country:"",localized_country_name:""},is_online_event:!0,group:{created:1594996319e3,name:"M\xfcnchen lernt",id:33976442,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Munchen-lernt",who:"Mitglieder",localized_location:"M\xfcnchen, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/Munchen-lernt/events/271985114/",description:"<p>Unser erster Open Space rund um M\xfcnchen lernt - wir sind gespannt auf Euch und Eure Themen. Mehr Infos folgen</p> ",visibility:"public",member_pay_fee:!1},{created:1581597243e3,duration:108e5,id:"268680653",name:"Sauerteigbrot backen am 31.07. um 14:30 Uhr",date_in_series_pattern:!1,status:"upcoming",time:15961986e5,local_date:"2020-07-31",local_time:"14:30",updated:1581597243e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:0,venue:{id:26662106,name:"Atlanta Haus",lat:48.119056701660156,lon:11.550241470336914,repinned:!0,address_1:"Gotzinger Str. 48",city:"M\xfcnchen",country:"de",localized_country_name:"Deutschland"},is_online_event:!1,group:{created:1569843981e3,name:"Veranstaltungen rund ums Backen in M\xfcnchen",id:32829879,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Veranstaltungen-rund-ums-Backen-in-Munchen",who:"Mitglieder",localized_location:"M\xfcnchen, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/Veranstaltungen-rund-ums-Backen-in-Munchen/events/268680653/",description:"",visibility:"public",member_pay_fee:!1},{created:1594027464e3,duration:54e5,id:"271747100",name:"SciComms without Borders: PROWIBO about bringing science to students \ud83c\udf93",date_in_series_pattern:!1,status:"upcoming",time:1596042e6,local_date:"2020-07-29",local_time:"19:00",updated:1595600256e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:14,venue:{id:26906060,name:"Online-Event",repinned:!1,country:"",localized_country_name:""},is_online_event:!0,group:{created:1593255974e3,name:"SciComms without Borders",id:33893791,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"SciComms-without-Borders",who:"Science enthusiasts",localized_location:"M\xfcnchen, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/SciComms-without-Borders/events/271747100/",description:"",how_to_find_us:"https://zoom.us/j/93073715951?pwd=cFh2MEVlNjI1WjdveXpoUXpNSFNBdz09",visibility:"public",member_pay_fee:!1},{created:1594409348e3,duration:36e5,id:"271845882",name:"15x4 Chit-Chat Sessions 3: Diagnosing Infections",date_in_series_pattern:!1,status:"upcoming",time:15961284e5,local_date:"2020-07-30",local_time:"19:00",updated:159491587e4,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:14,venue:{id:26906060,name:"Online-Event",repinned:!1,country:"",localized_country_name:""},is_online_event:!0,group:{created:1495653219e3,name:"15x4 Munich \u2014 Share Your Knowledge!",id:23987389,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"15x4munich",who:"Members",localized_location:"M\xfcnchen, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/15x4munich/events/271845882/",description:"",how_to_find_us:"https://zoom.us/j/99509614463",visibility:"public",member_pay_fee:!1},{created:1595224822e3,duration:144e5,id:"272035655",name:"play board games",date_in_series_pattern:!1,status:"upcoming",time:15957792e5,local_date:"2020-07-26",local_time:"18:00",rsvp_open_offset:"PT104H",updated:1595224839e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:46,venue:{id:26947718,name:"Biergarten & Restaurant am Chinesischen Turm",lat:48.151973724365234,lon:11.592218399047852,repinned:!1,address_1:"Englischer Garten 3 ",city:"M\xfcnchen",country:"de",localized_country_name:"Deutschland"},is_online_event:!1,group:{created:1493414929e3,name:"Munich Social Gaming",id:23474017,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Munich-Social-Gaming",who:"Members",localized_location:"M\xfcnchen, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/Munich-Social-Gaming/events/272035655/",description:"<p>Hi all,</p> <p>let's play our favorite games (Uno!, Coup, Dodelido, Saboteur) in a biergarten. Unlimited participants number! We rely on your help in bringing games if you have some. Looking forward to play with you!</p> <p>Cheers<br/>Evgeniy</p> ",visibility:"public",member_pay_fee:!1},{created:1581027679e3,duration:108e5,id:"dxzsnrybclbjb",name:"PhD Meetup",rsvp_limit:10,date_in_series_pattern:!1,status:"upcoming",time:1596735e6,local_date:"2020-08-06",local_time:"19:30",rsvp_close_offset:"PT31H30M",updated:1581027679e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:10,venue:{id:26849772,name:"Hamburgerei Schwabing",lat:48.161231994628906,lon:11.588794708251953,repinned:!1,address_1:"Feilitzschstra\xdfe 12",city:"M\xfcnchen",country:"de",localized_country_name:"Deutschland"},is_online_event:!1,group:{created:1461526892e3,name:"PhD Meetup Munich",id:19878163,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"PhD-Meetup-Munich",who:"Scientists",localized_location:"M\xfcnchen, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/PhD-Meetup-Munich/events/dxzsnrybclbjb/",description:"<p>Hello folks,</p> <p>let's meet again to discuss genetics, art, politics, computer-chips, or whatever will come up.</p> <p>We'll change venue for every meeting. So if you know places you want to go to, we appreciate any suggestions!</p> <p>If you can't make it (even on short notice), please change your RSVP so we can book the tables accordingly!</p> <p>See you soon :)</p> ",how_to_find_us:"Table is reserved on the name or one of the organizers.",visibility:"public",member_pay_fee:!1},{created:1587368987e3,duration:72e5,id:"bslqrrybclbwb",name:"Muenchner Brainstormers Club ONLINE MEETING",date_in_series_pattern:!1,status:"upcoming",time:15976845e5,local_date:"2020-08-17",local_time:"19:15",updated:1587368987e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:4,venue:{id:26903444,name:"Online",lat:48.13512420654297,lon:11.58198070526123,repinned:!0,address_1:"Online Adresse noch nicht verf\xfcgbar",city:"M\xfcnchen",country:"de",localized_country_name:"Deutschland"},is_online_event:!1,group:{created:1444592791e3,name:"Toastmasters Clubs in and around Munich",id:19017360,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Toastmasters-Clubs-in-and-around-Munich",who:"Toastmasters",localized_location:"M\xfcnchen, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/Toastmasters-Clubs-in-and-around-Munich/events/bslqrrybclbwb/",description:"",how_to_find_us:"Link per E-Mail an vp-pr@munich-brainstormers.de anfordern. Camera ist erforderlich. ",visibility:"public",member_pay_fee:!1},{created:1595151757e3,duration:72e5,id:"272018851",name:"Assembling trust",rsvp_limit:8,date_in_series_pattern:!1,status:"upcoming",time:1596726e6,local_date:"2020-08-06",local_time:"17:00",updated:1595458681e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:5,venue:{id:26953736,name:"Goetheplatz",lat:48.1301383972168,lon:11.556174278259277,repinned:!0,address_1:"Goethepl.",city:"M\xfcnchen",country:"de",localized_country_name:"Deutschland"},is_online_event:!1,group:{created:1580495568e3,name:"Deep Conversation",id:33278390,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"deep-conversation-munich",who:"Members",localized_location:"M\xfcnchen, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/deep-conversation-munich/events/272018851/",description:"<p>Hi all,</p> <p>let us talk in a friendly atmosphere about trust and things that influence keeping it.</p> <p>Please come prepared, it is a discussion where we share our thoughts and experiences, and learn from each other.</p> <p>Meeting point: Hans im Gl\xfcck Goethepl. 2, 80337 M\xfcnchen, at G\xf6theplatz. We can get some drinks, and might go to Theresienwiese afterwards, if the weather is good.</p> ",visibility:"public",member_pay_fee:!1},{created:1582567535e3,duration:72e5,id:"268956562",name:"Mehr Frauen in den Aufsichtsr\xe4ten?",date_in_series_pattern:!1,status:"upcoming",time:16019154e5,local_date:"2020-10-05",local_time:"18:30",updated:1582567535e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:2,venue:{id:26874339,name:"FOM Hochschule Hochschulzentrum M\xfcnchen",lat:48.14244842529297,lon:11.556012153625488,repinned:!1,address_1:"Arnulfstra\xdfe 30",city:"M\xfcnchen",country:"de",localized_country_name:"Deutschland"},is_online_event:!1,group:{created:1582456038e3,name:"M\xfcnchen Wissensaustausch Meetup Gruppe",id:33415222,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"meetup-group-HBpwEMbO",who:"Mitglieder",localized_location:"M\xfcnchen, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/meetup-group-HBpwEMbO/events/268956562/",description:"<p>Elke Benning Rohnke, bringt eine \xfcber 30-j\xe4hrige Erfahrung aus T\xe4tigkeiten in und f\xfcr internationale Konzerne mit. Ihre Kompetenzen baute sie in namhaften Unternehmen wie Procter & Gamble, Kraft Jacobs Suchard in Deutschland und Kanada auf. Bereits nach zw\xf6lf Jahren wurde sie aufgrund ihrer Erfolge in den Vorstand der Wella AG berufen. Heute ber\xe4t sie namhafte Unternehmen in den Themenbereichen profitables Wachstum und Customer Centricity. Elke Benning-Rohnke h\xe4lt Aufsichtsrats- und Beiratsmandate und ist auch Aufsichtsratsvorsitzende einer mittelst\xe4ndischen AG .</p> ",visibility:"public",member_pay_fee:!1},{created:1595155937e3,duration:72e5,id:"272019427",name:"Philosophieren und Freunde finden - philosophize and make friends",rsvp_limit:20,date_in_series_pattern:!1,status:"upcoming",time:15957792e5,local_date:"2020-07-26",local_time:"18:00",updated:1595155937e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:9,venue:{id:26906060,name:"Online-Event",repinned:!1,country:"",localized_country_name:""},is_online_event:!0,group:{created:1546246724e3,name:"Philosophieren und Freunde finden",id:30806436,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Philosophieren-Diskutieren-Kennenlernen",who:"Leute",localized_location:"M\xfcnchen, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/Philosophieren-Diskutieren-Kennenlernen/events/272019427/",description:"",visibility:"public",member_pay_fee:!1},{created:1592159336e3,duration:72e5,id:"271294652",name:"Ulysses (Chps. 15 - 18 + Overall) - James Joyce",date_in_series_pattern:!1,status:"upcoming",time:16020036e5,local_date:"2020-10-06",local_time:"19:00",updated:1592161928e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:8,is_online_event:!1,group:{created:1520326534e3,name:"The Classic-Novels-You-Should-Have-Read-Already Bookclub",id:27741411,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Classic-Literature-for-the-Dramatically-Stunted",who:"Members",localized_location:"M\xfcnchen, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/Classic-Literature-for-the-Dramatically-Stunted/events/271294652/",description:"",visibility:"public",member_pay_fee:!1},{created:157900279e4,duration:72e5,id:"267903276",name:"LoL-Spezial - Lachstern, tiefe Entspannung und das Gef\xfchlsquadrat",date_in_series_pattern:!1,status:"upcoming",time:159777e7,local_date:"2020-08-18",local_time:"19:00",updated:157900279e4,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:3,venue:{id:26174054,name:"Alten- und Service-Zentrum Laim",lat:48.134281158447266,lon:11.514219284057617,repinned:!0,address_1:"Kiem-Pauli-Weg 22",city:"M\xfcnchen",country:"de",localized_country_name:"Deutschland"},is_online_event:!1,group:{created:1549822652e3,name:"LoL-Training M\xfcnchen",id:31133430,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"LOL-Training-Munchen",who:"Mitglieder",localized_location:"M\xfcnchen, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/LOL-Training-Munchen/events/267903276/",description:"",how_to_find_us:"U-Bahnhaltestelle Friedenheimer Strasse, und 5 Min. Fu\xdfweg.",visibility:"public",member_pay_fee:!1},{created:15826212e5,duration:72e5,id:"268973460",name:"Brezeln selber backen am 21.08. um 15:30",date_in_series_pattern:!1,status:"upcoming",time:15980166e5,local_date:"2020-08-21",local_time:"15:30",updated:15826212e5,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:0,venue:{id:26856570,name:"Gotzinger Str. 48",lat:48.11911392211914,lon:11.550498008728027,repinned:!1,address_1:"Gotzinger Str. 48",city:"M\xfcnchen",country:"de",localized_country_name:"Deutschland"},is_online_event:!1,group:{created:1569843981e3,name:"Veranstaltungen rund ums Backen in M\xfcnchen",id:32829879,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Veranstaltungen-rund-ums-Backen-in-Munchen",who:"Mitglieder",localized_location:"M\xfcnchen, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/Veranstaltungen-rund-ums-Backen-in-Munchen/events/268973460/",description:"",visibility:"public",member_pay_fee:!1},{created:1588705075e3,duration:54e5,id:"bnjbsrybclbgb",name:"Chinese/ German Club in Munich",rsvp_limit:13,date_in_series_pattern:!1,status:"upcoming",time:15965604e5,local_date:"2020-08-04",local_time:"19:00",updated:1588705075e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:4,venue:{id:26903444,name:"Online",lat:48.13512420654297,lon:11.58198070526123,repinned:!0,address_1:"Online Adresse noch nicht verf\xfcgbar",city:"M\xfcnchen",country:"de",localized_country_name:"Deutschland"},is_online_event:!1,group:{created:1444592791e3,name:"Toastmasters Clubs in and around Munich",id:19017360,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Toastmasters-Clubs-in-and-around-Munich",who:"Toastmasters",localized_location:"M\xfcnchen, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/Toastmasters-Clubs-in-and-around-Munich/events/bnjbsrybclbgb/",description:"",how_to_find_us:"PM Hongnan to get an invite",visibility:"public",member_pay_fee:!1}],g=n(8),y=n.n(g);function b(e){return f.apply(this,arguments)}function f(){return(f=Object(h.a)(_.a.mark((function e(t){var n,a,i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,E();case 4:if(!(n=e.sent)){e.next=11;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,y.a.get(a);case 9:return i=e.sent,e.abrupt("return",i.data);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t,n){return M.apply(this,arguments)}function M(){return(M=Object(h.a)(_.a.mark((function e(t,n,a){var i,r,o;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",v);case 2:return e.next=4,E();case 4:if(!(i=e.sent)){e.next=13;break}return r="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+i,t&&n&&(r+="&lat="+t+"&lon="+n),a&&(r+="&page="+a),e.next=11,y.a.get(r);case 11:return o=e.sent,e.abrupt("return",o.data.events);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return D.apply(this,arguments)}function D(){return(D=Object(h.a)(_.a.mark((function e(){var t,n,a,i,r,o;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token")){e.next=8;break}if(n=new URLSearchParams(window.location.search),a=n.get("code")){e.next=7;break}return window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=qqqla2dkife1n9ravthtl07ek0&response_type=code&redirect_uri=https://robinnicodemus.github.io",e.abrupt("return",null);case 7:return e.abrupt("return",k("get",a));case 8:if(i=localStorage.getItem("last_saved_time"),!(t&&Date.now()-i<36e5)){e.next=13;break}return e.abrupt("return",t);case 13:if(r=new URLSearchParams(window.location.search),o=r.get("code")){e.next=18;break}return window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=qqqla2dkife1n9ravthtl07ek0&response_type=code&redirect_uri=https://robinnicodemus.github.io",e.abrupt("return",null);case 18:return e.abrupt("return",k("get",o));case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){return z.apply(this,arguments)}function z(){return(z=Object(h.a)(_.a.mark((function e(t,n){var a,i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return("get"===t||"renew"===t)&&(a="https://8nx24xwj71.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n),e.next=3,y.a.get(a);case 3:return i=e.sent,localStorage.setItem("access_token",i.data.access_token),localStorage.setItem("refresh_token",i.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",i.data.access_token);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={query:"search cities",suggestions:[]},e.handleItemClicked=function(t,n,a){e.setState({query:t,suggestions:[]}),e.props.updateEvents(n,a)},e.handleInputChanged=function(t){var n=t.target.value;e.setState({query:n}),b(n).then((function(t){return e.setState({suggestions:t})}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"CitySearch"},i.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),i.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return i.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)}))))}}]),n}(a.Component),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={query:32},e.timer=null,e.onChangeDebounced=function(){clearTimeout(e.timer),e.timer=setTimeout((function(){e.props.updatePage(e.state.query)}),250)},e.handleInputChanged=function(t){var n=t.target.value;e.setState({query:n}),e.onChangeDebounced()},e}return Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"NumberOfEvents"},i.a.createElement("input",{type:"number",className:"changeNumOfEvents",value:this.state.query,onChange:this.handleInputChanged}))}}]),n}(a.Component),C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i)))._isMounted=!1,e.state={events:[],page:32,lat:null,lon:null},e.updateEvents=function(t,n,a){t&&n&&(w(t,n,e.state.page).then((function(a){return e.setState({events:a,lat:t,lon:n})})),w(e.state.lat,e.state.lon,a).then((function(t){return e.setState({events:t})})))},e.updatePage=function(t){e.setState({page:t}),e.updateEvents(e.state.lat,e.state.lon,t)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,w().then((function(t){e._isMounted&&e.setState({events:t})}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(S,{updateEvents:this.updateEvents}),i.a.createElement(j,{updatePage:this.updatePage}),i.a.createElement(m,{events:this.state.events}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=n(20);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),B.config("ef0f8c9b4598490b90e11740dcff0cdd").install()}},[[21,1,2]]]);
//# sourceMappingURL=main.fe680b81.chunk.js.map