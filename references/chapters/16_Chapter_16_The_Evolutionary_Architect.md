Chapter	16.	The	Evolutionary
Architect

As	we	have	seen	so	far,	microservices	give	us	a	lot	of	choices,	and	accordingly	a
lot	of	decisions	to	make.	For	example,	how	many	different	technologies	should
we	use,	should	we	let	different	teams	use	different	programming	idioms,	and
should	we	split	or	merge	a	microservice?	How	do	we	go	about	making	these
decisions?	With	the	faster	pace	of	change	and	the	more	fluid	environment	that
these	architectures	allow,	the	role	of	the	architect	also	has	to	change.	In	this
chapter,	I’ll	take	a	fairly	opinionated	view	of	what	the	role	of	an	architect	is	and
hopefully	launch	one	final	assault	on	the	ivory	tower.

What’s	in	a	Name?

You	keep	using	that	word.	I	do	not	think	it	means	what	you	think	it	means.

—Inigo	Montoya,	from	The	Princess	Bride

Architects	have	an	important	job.	They	are	in	charge	of	making	sure	the	system
has	a	joined-up	technical	vision,	one	that	should	help	deliver	the	software	that
customers	need.	In	some	places,	they	may	have	to	work	with	only	one	team,	in
which	case	the	role	of	the	architect	and	that	of	the	technical	lead	are	often	one
and	the	same.	In	other	places,	they	may	be	defining	the	vision	for	an	entire
program	of	work,	coordinating	with	multiple	teams	across	the	world,	or	perhaps
even	an	entire	organization.	At	whatever	level	architects	operate,	their	role	is	a
tricky	one	to	pin	down,	and	despite	it	often	being	the	obvious	career	progression
for	developers	in	enterprise	organizations,	it	is	also	a	role	that	gets	more
criticism	than	virtually	any	other	in	our	field.	More	than	any	other	role,
architects	can	have	a	direct	impact	on	the	quality	of	the	systems	built,	on	the
working	conditions	of	their	colleagues,	and	on	their	organization’s	ability	to
respond	to	change,	and	yet	their	role	seems	very	poorly	understood.	Why	is	that?

Our	industry	is	a	young	one.	We	seem	to	forget	sometimes	that	we	have	been
creating	programs	that	run	on	what	we	recognize	as	computers	for	only	75	years

or	so.	Our	profession	doesn’t	fit	into	a	nice	neat	box	that	society	as	a	whole
understands.	We	aren’t	like	electricians,	plumbers,	medical	doctors,	or	engineers.
How	many	times	have	you	told	someone	what	you	do	at	a	party,	only	for	the
conversation	to	stop?	The	world	as	a	whole	struggles	to	understand	software
development—as	I’ve	outlined	multiple	times	throughout	this	book,	we
frequently	don’t	seem	to	understand	it	ourselves.

So	we	borrow	from	other	professions.	We	call	ourselves	software	“engineers,”	or
“architects.”	But	we	aren’t	architects	or	engineers	in	the	way	that	society
understands	those	professions.	Architects	and	engineers	have	a	rigor	and
discipline	we	could	only	dream	of,	and	their	importance	in	society	is	well
understood.	I	remember	talking	to	a	friend	of	mine	the	day	before	he	became	a
qualified	architect.	“Tomorrow,”	he	said,	“if	I	give	you	advice	down	at	the	pub
about	how	to	build	something	and	it’s	wrong,	I	get	held	to	account.	I	could	get
sued,	as	in	the	eyes	of	the	law	I	am	now	a	qualified	architect	and	I	should	be
held	responsible	if	I	get	it	wrong.”	The	importance	of	these	jobs	to	society
means	that	there	are	required	qualifications	people	have	to	meet.	In	the	UK,	for
example,	a	minimum	of	seven	years’	study	is	required	before	you	can	be	called
an	architect.	But	these	jobs	are	also	based	on	a	body	of	knowledge	going	back
thousands	of	years.	And	software	architects?	Not	quite.	Which	is	partly	why	I
view	many	forms	of	IT	certification	as	worthless,	as	we	know	so	little	about
what	“good”	looks	like.

1

I	don’t	say	this	to	belittle	the	term	software	engineering, 	coined	back	in	the
1960s	by	Margaret	Hamilton,	but	it	was	as	much	aspirational	as	it	was	about	the
current	reality.	The	term	emerged	as	a	call	to	improve	the	quality	of	the	software
being	created,	and	in	recognition	of	the	fact	that	software	projects	often	failed
and	yet	were	increasingly	being	used	in	vital	mission-	and	safety-critical	fields.
Much	work	has	been	done	to	improve	the	situation	since	then,	but	my	own	take
after	20	years	in	the	industry	is	that	we’ve	still	got	a	lot	to	learn	about	doing	a
good	(or	at	least	a	better)	job.

Part	of	us	wants	recognition,	so	we	borrow	names	from	other	professions	that
already	have	the	recognition	we	crave.	But	this	can	prove	problematic,	if	we
borrow	working	practices	from	those	professions	without	understanding	the
mindset	behind	them	or	taking	into	account	how	software	development	is
different	from,	say,	civil	engineering.	None	of	this	should	be	taken	as	an

argument	that	we	shouldn’t	aim	to	have	more	rigor	in	our	work—just	that	we
cannot	simply	borrow	ideas	from	elsewhere	and	assume	they	will	work	for	us.
Our	industry	is	very	young,	and	the	challenge	is	that	we	have	far	fewer	absolutes
around	which	we	agree	as	an	industry.

Perhaps	the	term	architect,	or	at	least	the	common	understanding	of	what
architects	do,	has	done	the	most	harm	in	this	way:	the	idea	of	someone	who
draws	up	detailed	plans	for	others	to	interpret	and	expects	them	to	be	carried	out;
the	balance	of	part	artist,	part	engineer,	overseeing	the	creation	of	what	is	often	a
singular	vision,	with	all	other	viewpoints	being	subservient,	except	for	the
occasional	objection	from	the	structural	engineer	regarding	the	laws	of	physics.
In	our	industry,	this	view	of	the	architect	leads	to	some	terrible	practices,	with
architects	creating	diagram	after	diagram,	page	after	page	of	documentation,
with	a	view	to	inform	the	construction	of	the	perfect	system,	while	failing	to	take
into	account	the	fundamentally	unknowable	future,	and	utterly	devoid	of	any
understanding	of	how	hard	their	plans	will	be	to	implement,	or	whether	or	not
they	will	actually	work,	let	alone	having	any	ability	to	change	as	we	learn	more.

But	architects	of	the	built	environment	are	operating	in	a	different	realm	from
that	of	software	architects.	Their	constraints	are	different,	the	end	product
different.	The	cost	of	change	is	so	much	higher	in	construction	than	it	is	in
software	development.	You	can’t	unpour	concrete,	but	you	can	change	code,	and
even	the	infrastructure	we	run	our	code	on	is	much	more	malleable	than	before,
thanks	to	virtualization.	Buildings	are	fairly	fixed	once	built—they	can	be
changed,	or	expanded,	or	torn	down,	but	the	associated	costs	are	very	high.	But
we	expect	our	software	to	continually	change	to	suit	our	needs.

So	if	software	architecture	is	different	from	the	architecture	of	the	built
environment,	perhaps	we	should	be	a	bit	clearer	in	terms	of	what	software
architecture	actually	is.

What	Is	Software	Architecture?

One	of	the	most	famous	definitions	of	software	architecture	comes	via	an	email
from	Ralph	Johnson:	“Architecture	is	about	the	important	stuff.	Whatever	that
is.” 	So	does	this	mean	that	anything	important	is	done	by	the	architect?	Does
that	mean	that	all	other	work	being	done	is	not	important?	The	issue	with	this

2

oft-quoted	statement	is	that	it’s	often	used	in	isolation,	without	any
understanding	of	the	wider	response	in	which	Ralph	shared	it.	Firstly,	it’s	clear
that	he	is	talking	from	the	perspective	of	a	software	developer.	He	goes	on	to
say:

So,	a	better	definition	would	be	“In	most	successful	software	projects,	the
expert	developers	working	on	that	project	have	a	shared	understanding	of	the
system	design.	This	shared	understanding	is	called	‘architecture.’	This
understanding	includes	how	the	system	is	divided	into	components	and	how
the	components	interact	through	interfaces.	These	components	are	usually
composed	of	smaller	components,	but	the	architecture	only	includes	the
components	and	interfaces	that	are	understood	by	all	the	developers.”

This	would	be	a	better	definition	because	it	makes	clear	that	architecture	is	a
social	construct	(well,	software	is	too,	but	architecture	is	even	more	so)
because	it	doesn’t	just	depend	on	the	software,	but	on	what	part	of	the
software	is	considered	important	by	group	consensus.

Here	Ralph	is	using	the	term	components	in	its	most	general	sense.	In	the
context	of	this	book,	we	can	think	of	the	components	as	our	microservices,	and
perhaps	the	modules	inside	those	microservices.

Software	architecture	is	the	shape	of	the	system.	Architecture	happens,	by	design
or	accident.	We	make	a	series	of	ad	hoc	decisions,	and	we	end	up	with	the	results
—without	thinking	about	things	in	terms	of	architecture,	we	end	up	with
architecture	nonetheless.	Architecture	can	sometimes	be	what	happens	while
we’re	busy	making	other	plans.

A	dedicated	architect	is	someone	who	should	see	and	understand	that	whole
system,	understand	the	forces	acting	on	it.	They	need	to	ensure	there	is	a	vision
for	the	architecture	that	is	fit	for	purpose	and	is	clearly	understood—an
architectural	vision	that	satisfies	the	needs	of	the	system	and	its	users,	as	well	as
those	of	the	people	who	work	on	the	system	itself.	Looking	at	only	one	facet—
e.g.,	logical	but	not	physical,	shape	but	not	developer	experience—limits	an
architect’s	effectiveness.	If	you	accept	that	architecture	is	about	understanding
the	system,	then	limiting	the	scope	of	what	you	care	about	limits	your	ability	to
reason	and	make	changes.

Architecture	can	be	invisible	to	the	people	living	with	it.	It	can	be	so	slight	as	to

not	really	be	there.	It	can	be	something	that	guides	and	helps	achieve	the	right
outcome.	It	can	be	suffocating	and	overbearing.	It	can	delight	without	you
realizing	it	is	even	a	thing,	and	crush	the	spirit	from	you	without	any	malice
being	intended.	So	whether	or	not	architecture	is	“about	the	important	stuff,”	it’s
certainly	important.

Another	pithy	quote	that	is	often	used	to	define	software	architecture	comes
from	the	same	article	where	Martin	shares	Ralph’s	views:	“So	you	might	end	up
defining	architecture	as	things	that	people	perceive	as	hard	to	change."	Martin’s
idea	that	architecture	is	the	stuff	that’s	hard	to	change	makes	sense	at	some	level
and	brings	us	back	to	the	concept	of	architecture	in	the	built	environment.	Where
things	are	harder	to	change,	they	need	a	bit	more	up-front	thought	to	really	make
sure	we	are	going	in	the	right	direction.	But	there	is	a	problem	with	taking	a
simple	definition	of	a	complex	idea	and	running	with	that	as	a	working
definition—if	this	statement	were	entirely	how	you	thought	about	software
architecture,	you’d	miss	out	on	a	lot.	Yes,	a	lot	of	software	architecture	is	about
thinking	about	the	things	that	will	be	hard	to	change,	but	it	is	also	about	creating
space	to	allow	change	in	the	design.

Making	Change	Possible

Coming	back	to	the	world	of	buildings	rather	than	software	systems:	architect
Mies	van	der	Rohe	arguably	did	more	to	pioneer	what	we	now	think	of	as	the
modern	skyscraper	than	any	other	architect—his	famous	Seagram	Building
became	the	blueprint	for	much	of	what	followed.	The	Seagram	Building	differs
from	a	lot	of	what	came	before.	The	outer	walls	of	the	building	are	nonstructural
—they	wrap	a	steel	outer	frame.	The	main	building	services—lifts, 	stairways,
air	conditioning,	water	and	waste,	and	the	electrical	system—run	through	a
central	concrete	core.	Watch	a	modern	high-rise	being	constructed	today,	and	it’s
this	central	concrete	core	that	is	built	first,	a	giant	crane	often	seen	perching	on
top.	Each	floor	of	the	Seagram	Building	has	no	interior	structural	walls—this
means	that	you	have	total	flexibility	in	terms	of	how	the	space	is	used.	You	can
reconfigure	the	space	as	you	see	fit,	routing	electrical	wiring	and	air
conditioning	to	different	parts	of	each	floor	via	suspended	ceilings	and	ducts	in
the	floor	itself.

3

It’s	interesting	to	note	that	the	Seagram	Building	was	developed	using	a	process
in	which	the	design	of	the	building	evolved	while	the	construction	was	carried
out.	Now	where	have	we	seen	that	idea	before?

The	idea	with	this	design	was	to	deliver	what	Mies	van	der	Rohe	called
“universal	space”—a	large,	single-span	volume	that	could	be	reconfigured	to	suit
different	needs.	The	use	of	buildings	changes,	so	the	idea	was	to	deliver	space
that	is	as	flexible	as	possible	in	terms	of	how	it	can	be	used.	In	this	way,	Mies
van	der	Rohe	not	only	had	to	focus	on	the	fundamental	aesthetics	of	the
building,	finding	a	space	for	core	services	that	would	be	difficult	if	not
impossible	to	change	later,	but	he	also	had	to	ensure	that	the	building	could	be
used	in	different	ways	than	originally	envisaged.	Shortly,	we’ll	look	at	how	we
allow	for	change	in	the	space	of	a	microservice	architecture.

An	Evolutionary	Vision	for	the	Architect

Our	requirements	as	architects	of	software	shift	more	rapidly	than	they	do	for
people	who	design	and	build	buildings—as	do	the	tools	and	techniques	at	our
disposal.	The	things	we	create	are	not	fixed	points	in	time.	Once	launched	into
production,	our	software	will	continue	to	evolve	as	the	way	it	is	used	changes.
For	most	things	we	create,	we	have	to	accept	that	once	the	software	gets	into	the
hands	of	our	users,	we	will	have	to	react	and	adapt	rather	than	expect	a	never-
changing	artifact.	Thus,	software	architects	need	to	shift	their	thinking	away
from	creating	the	perfect	end	product	and	focus	instead	on	helping	create	a
framework	in	which	the	right	systems	can	emerge	and	continue	to	grow	as	we
learn	more.

Although	I	have	spent	much	of	the	chapter	discouraging	comparisons	to	other
professions,	there	is	an	analogy	that	I	like	when	it	comes	to	the	role	of	the	IT
architect	and	that	I	think	encapsulates	this	aspect	of	the	role	well.	Erik
Doernenburg	at	Thoughtworks	first	shared	with	me	the	idea	that	we	should	think
of	the	architect’s	role	more	as	town	planner	than	architect	of	the	built
environment.	The	role	of	the	town	planner	should	be	familiar	to	any	of	you	who
have	played	SimCity	or	Cities:	Skylines	before.	A	town	planner’s	role	is	to	look
at	a	multitude	of	sources	of	information	and	then	attempt	to	optimize	the	layout
of	a	city	to	best	suit	the	needs	of	present-day	citizens,	while	also	taking	into

account	future	use.	The	way	they	influence	how	the	city	evolves,	though,	is
interesting.	They	do	not	say,	“Build	this	specific	building	there”;	instead,	they
define	zones	that	allow	for	local	decision	making	within	certain	constraints.	So,
as	in	SimCity,	you	might	designate	part	of	your	city	as	an	industrial	zone,	and
another	part	as	a	residential	zone.	It	is	then	up	to	other	people	to	decide	what
buildings	get	created,	but	there	are	restrictions:	if	you	want	to	build	a	factory,	it
will	need	to	be	in	an	industrial	zone.	Rather	than	worrying	too	much	about	what
happens	in	one	zone,	the	town	planner	will	instead	spend	far	more	time	working
out	how	people	and	utilities	move	from	one	zone	to	another.

More	than	one	person	has	likened	a	city	to	a	living	creature.	The	city	changes
over	time.	It	shifts	and	evolves	as	its	occupants	use	it	in	different	ways,	or	as
external	forces	shape	it.	The	town	planner	does	their	best	to	anticipate	these
changes	but	accepts	that	trying	to	exert	direct	control	over	all	aspects	of	what
happens	is	futile.	So	our	architects	as	town	planners	need	to	set	direction	in
broad	strokes	and	get	involved	in	being	highly	specific	about	implementation
detail	only	in	limited	cases.	They	need	to	ensure	that	the	system	is	fit	for	purpose
now	but	also	a	platform	for	the	future.

The	comparison	with	software	should	be	obvious.	As	our	users	use	our	software,
we	need	to	react	and	change.	We	cannot	foresee	everything	that	will	happen,	and
so	rather	than	plan	for	each	and	every	eventuality,	we	should	plan	to	allow	for
change	by	avoiding	the	urge	to	overspecify	every	last	thing.	Our	city—the
system—needs	to	be	a	good,	happy	place	for	everyone	who	uses	it.

Defining	System	Boundaries

To	continue	with	the	metaphor	of	the	architect	as	town	planner	for	a	moment,
what	are	our	zones?	These	are	our	microservice	boundaries,	or	perhaps	coarse-
grained	groups	of	microservices.	As	architects,	we	need	to	worry	much	less
about	what	happens	inside	a	zone	and	more	about	what	happens	between	the
zones.	That	means	we	need	to	spend	time	thinking	about	how	our	microservices
talk	to	each	other	and	ensuring	that	we	can	properly	monitor	the	overall	health	of
our	system.	From	an	architecture	space,	this	is	how	we	create	our	own	universal
space—by	defining	some	specific	boundaries,	we	highlight	to	our	colleagues
building	the	system	those	areas	where	changes	can	be	made	more	freely	without

breaking	some	fundamental	aspect	of	our	architecture.

To	look	at	a	very	simple	example,	in	Figure	16-1	we	see	the	Recommendations
microservice	accessing	information	from	the	Promotions	and	Sales
microservices.	As	we’ve	already	covered	at	length,	we	are	free	to	change	the
functionality	hidden	inside	these	three	microservices	without	worrying	about
breaking	the	overall	system—I	can	change	whatever	I	want	in	Sales	or
Promotions	as	long	as	I	continue	to	maintain	the	expectations	that
Recommendations	has	about	how	it	will	interact	with	these	downstream
microservices.

Figure	16-1.	Changes	inside	a	microservice	boundary	are	easy	to	make,	as	long	as	the	interactions	between
microservices	don’t	change

We	can	create	space	for	change	at	larger-scope	levels	as	well.	In	Figure	16-2,	we
see	the	microservices	from	Figure	16-1	actually	exist	in	a	marketing	zone	that
maps	to	a	specific	team’s	responsibility.	We’ve	defined	an	expected	behavior	in
terms	of	how	the	marketing	functionality	interacts	with	the	larger	system.	Inside
the	marketing	zone,	we	can	make	any	changes	we	like,	as	long	as	compatibility
with	the	larger	system	is	maintained.	Coming	back	to	the	idea	of	understanding
what	things	are	hard	to	change,	organizational	structures	often	fall	into	this
category,	and	as	such	existing	team	structures	can	help	define	these	zones	for
you.	Coordinating	changes	within	a	team	across	microservices	owned	by	that

team	will	be	easier	than	changing	the	interactions	that	are	exposed	to	other
teams.

Figure	16-2.	Changes	within	a	zone	are	easier	to	make	than	changes	between	zones

This	ties	in	nicely	with	the	concept	of	a	team	API,	which	we	discussed	in	“Small
Teams,	Large	Organization”.	An	architect	can	help	facilitate	creation	of	a	team
API,	making	sure	the	team’s	microservices	and	working	practices	fit	in	with	the
wider	organization.

By	defining	spaces	in	which	these	changes	can	be	made	without	compromising
the	system	as	a	whole,	we	make	developers’	lives	easier	and	also	focus	our
attention	on	parts	of	the	system	that	are	harder	to	change.	Remember	the	concept
of	information	hiding	that	we	explored	in	Chapter	2?	As	we	explored	there,
hiding	information	inside	a	microservice	boundary	makes	it	much	easier	to
create	a	stable	interface	for	consumers.	When	we	make	changes	to	the
microservice,	it	is	easier	to	ensure	we	haven’t	broken	compatibility	with	external
consumers.	Here,	we	can	define	an	architecture	to	provide	information	hiding	at
the	team	level,	rather	than	just	at	the	microservice	level.	This	gives	us	another
level	of	information	hiding	and	creates	a	larger	safe	space	in	which	a	team	can

make	local	changes	without	breaking	the	wider	system.

Within	each	microservice	or	larger	zone,	you	may	be	OK	with	the	team	that
owns	that	zone	picking	a	different	technology	stack	or	data	store.	Other	concerns
may	kick	in	here,	of	course.	Your	inclination	to	let	teams	pick	the	right	tool	for
the	job	may	be	tempered	by	the	fact	that	it	becomes	harder	to	hire	people	or
move	them	between	teams	if	you	have	10	different	technology	stacks	to	support.
Similarly,	if	each	team	picks	a	completely	different	data	store,	you	may	find
yourself	lacking	enough	experience	to	run	any	of	them	at	scale.	Netflix,	for
example,	has	mostly	standardized	on	Cassandra	as	a	data-store	technology.
Although	it	may	not	be	the	best	fit	for	all	of	its	cases,	Netflix	feels	that	the	value
gained	by	building	tooling	and	expertise	around	Cassandra	is	more	important
than	having	to	support	and	operate	at	scale	multiple	other	platforms	that	may	be
a	better	fit	for	certain	tasks.	Netflix	is	an	extreme	example,	where	scale	is	likely
the	strongest	overriding	factor,	but	you	get	the	idea.

Between	microservices	is	where	things	can	get	messy,	however.	If	one
microservice	decides	to	expose	REST	over	HTTP,	another	makes	use	of	gRPC,
and	a	third	uses	Java	RMI,	then	integration	can	become	a	nightmare,	as
consuming	microservices	have	to	understand	and	support	multiple	styles	of
interchange.	This	is	why	I	try	to	stick	to	the	guideline	that	we	should	“be	worried
about	what	happens	between	the	boxes,	and	be	liberal	in	what	happens	inside.”

So	a	successful	architecture	is	as	much	about	allowing	for	change	to	suit	the
needs	of	our	users	as	anything.	But	one	thing	people	often	forget	is	that	our
system	doesn’t	just	accommodate	users;	it	also	accommodates	the	people	that
actually	build	the	software	themselves.	A	successful	architecture	also	helps
create	a	nice	environment	in	which	to	do	our	work.

A	Social	Construct

No	plan	survives	contact	with	the	enemy.

—Helmuth	von	Moltke	(heavily	paraphrased)

So	you’ve	thought	about	the	vision,	about	the	constraints,	and	about	what	you
need	to	accomplish.	You	think	you	understand	what	will	be	hard	to	change,	and
the	spaces	where	you	need	to	make	change	possible.	Now	what?	Well,	the

architecture	is	what	happens,	not	what	you	think	should	happen—this	is	the
difference	between	vision	and	reality.	Architects	of	the	built	environment	need	to
work	with	the	people	constructing	the	building	to	help	them	understand	what	the
vision	is,	but	also	to	change	the	plan	when	reality	challenges	that	vision.	It’s
possible	that	what	you	think	is	possible	fundamentally	isn’t.	If	an	architect	isn’t
embedded	to	some	extent	with	the	people	creating	the	system,	then	they	will	be
unable	to	help	communicate	the	vision	to	the	people	doing	the	work,	nor	will	the
architect	understand	where	that	vision	is	no	longer	fit	for	purpose.	The
construction	crew	may	encounter	things	on	the	ground	that	weren’t	foreseen,	or
perhaps	a	supply	shortage	might	cause	a	rethink	in	terms	of	the	design.

Architecture	is	what	happens,	not	what	is	planned.	If	as	an	architect	you	remove
yourself	from	the	process	of	putting	this	vision	into	place,	then	you’re	not	an
architect—you’re	a	dreamer.	The	architecture	that	will	emerge	may	or	may	not
bear	any	relationship	to	what	you	want.	It	will	happen	with	or	without	you.
Implementing	an	architecture	requires	the	work	of	many	people	and	a	host	of
decisions,	large	and	small.

4
As	Grady	Booch	put	it:

In	the	beginning,	the	architecture	of	a	software-intensive	system	is	a	statement
of	vision.	In	the	end,	the	[a]rchitecture	of	every	such	system	is	a	reflection	of
the	billions	upon	billions	of	small	and	large,	intentional	and	accidental	design
decisions	made	along	the	way.

This	means	that	even	if	you	have	a	dedicated	individual	who	is	ultimately
accountable	for	the	architecture,	there	are	many	people	responsible	for	putting
this	vision	into	practice.	Implementing	a	successful	architecture	is	going	to	be	a
team	effort.	Coming	back	to	Ralph	Johnson’s	quote	from	earlier,	“architecture	is
a	social	construct.”	A	great	example	of	this	comes	from	Comcast,	which	has
shared	its	experiences	of	how	it	decentralized	decision	making	through	the	use
of	an	architecture	guild. 	Given	its	scale,	Comcast	decided	to	leverage
experiences	from	industry	steering	groups,	where	collective	decision	making	is
key:

5

At	Comcast	we	realized	this	problem	looked	very	similar	to	the	way	open
standards	bodies	work:	getting	multiple	autonomous	groups	to	agree	on
technical	approaches.	We	designed	an	internal	Architecture	Guild	explicitly

modeled	after	a	very	successful	standards	body,	the	Internet	Engineering	Task
Force	(IETF)	that	defines	many	important	Internet	protocols.

—Jon	Moore,	chief	software	architect	at	Comcast	Cable

Comcast’s	approach	has	a	level	of	formality	that	some	organizations	might	find
onerous,	but	it	seems	to	work	well	for	the	company,	given	its	size	and
distribution.

Habitability

Yet	another	concept	that	comes	from	the	built	environment	and	has	resonance	in
the	field	of	software	development	is	habitability.	I	first	learned	of	this	term	from
Frank	Buschmann—he	explained	that	an	architect	has	responsibility	for	ensuring
that	the	environment	they	create	is	nice	to	work	in.	If	the	architecture	is	the
framing	of	the	system,	which	describes	how	the	hard-to-change	things	fit
together,	then	there	are	also	times	when	constraints	may	need	to	be	put	in	place.
Get	this	wrong,	though,	and	working	in	the	system	can	become	painful	and
error-prone.

As	Richard	Gabriel,	author	of	Patterns	of	Software, 	explains:

6

Habitability	is	the	characteristic	of	source	code	that	enables	programmers
coming	to	the	code	later	in	its	life	to	understand	its	construction	and
intentions	and	to	change	it	comfortably	and	confidently.

A	modern	software	development	ecosystem	consists	of	more	than	just	code,
however—it	extends	beyond	this	to	the	technologies	we	use	and	the	working
practices	we	adopt.	All	too	frequently	I’ve	seen	developers	cursing	the
technology	they	are	told	to	use—often	technology	selected	by	people	who	don’t
ever	have	to	make	use	of	it.	The	more	you	make	the	evolution	of	your
architecture	and	the	selection	of	the	tools	and	technology	you	use	a	collaborative
process,	the	easier	it	will	be	for	you	to	ensure	that	the	end	result	is	a	habitable
environment	in	which	the	people	building	the	system	feel	happy	and	productive
in	their	work.

If	we	are	to	ensure	that	the	systems	we	create	are	habitable	for	our	developers,
then	our	architects	and	other	decision	makers	need	to	understand	the	impact	of
their	decisions.	At	the	very	least,	this	means	spending	time	with	the	team,	and

ideally	actually	spending	time	coding	with	the	team.	For	those	of	you	who
practice	pair	programming,	it	becomes	a	simple	matter	for	an	architect	to	join	a
team	for	a	short	period	as	one	member	of	a	pair.	Participating	in	ensemble
programming	exercises	could	also	yield	significant	benefits,	although	an
architect	taking	part	in	such	a	group	activity	needs	to	be	aware	how	their
presence	may	change	the	dynamic	of	the	ensemble.

Ideally,	you	should	work	on	normal	tasks	to	really	understand	what	“normal”
work	is	like.	I	cannot	emphasize	how	important	it	is	for	the	architect	to	actually
spend	time	with	the	teams	building	the	system!	This	is	significantly	more
effective	than	having	a	call	or	just	looking	at	their	code.	As	for	how	often	you
should	do	this,	that	depends	greatly	on	the	size	of	the	team(s)	you	are	working
with.	But	the	key	is	that	it	should	be	a	routine	activity.	If	you	are	working	with
four	teams,	for	example,	perhaps	make	sure	you	spend	half	a	day	with	each	team
every	four	weeks,	working	with	them	on	their	delivery	tasks	to	ensure	you	build
awareness	and	improved	communications	with	the	teams	you	are	working	with.

A	Principled	Approach

Rules	are	for	the	obedience	of	fools	and	the	guidance	of	wise	men.
—Generally	attributed	to	Douglas	Bader

Making	decisions	in	system	design	is	all	about	trade-offs,	and	microservice
architectures	give	us	lots	of	trade-offs	to	make!	When	picking	a	data	store,	do	we
pick	a	platform	that	we	have	less	experience	with	but	that	gives	us	better
scaling?	Is	it	OK	for	us	to	have	two	different	technology	stacks	in	our	system?
What	about	three?	Some	decisions	can	be	made	completely	on	the	spot	with	the
information	available	to	us,	and	these	are	the	easiest	to	make.	But	what	about
those	decisions	that	might	have	to	be	made	on	incomplete	information?

Framing	can	help	here,	and	a	great	way	to	help	frame	our	decision	making	is	to
define	a	set	of	principles	and	practices	that	guide	it,	based	on	goals	that	we	are
trying	to	achieve.	Let’s	look	at	each	of	these	aspects	of	framing	in	turn.

Strategic	Goals

The	role	of	the	architect	is	already	daunting	enough,	so	luckily	we	usually	don’t

have	to	also	define	strategic	goals!	Strategic	goals	should	speak	to	where	your
company	is	going	and	to	how	it	sees	itself	as	best	making	its	customers	happy.
These	will	be	high-level	goals	and	may	not	include	technology	at	all.	They	could
be	defined	at	a	company	level	or	a	division	level.	They	might	be	things	like
“Expand	into	Southeast	Asia	to	unlock	new	markets,”	or	“Let	the	customer
achieve	as	much	as	possible	using	self-service.”	The	key	is	that	they	define
where	your	organization	is	headed,	so	you	need	to	make	sure	the	technology	is
aligned	to	that.

If	you’re	the	person	defining	the	company’s	technical	vision,	this	may	mean
you’ll	need	to	spend	more	time	with	the	nontechnical	parts	of	your	organization
(or	“the	business,”	as	they	are	often	called).	What	is	the	driving	vision	for	the
business?	And	how	does	it	change?

Principles

Principles	are	rules	you	have	made	in	order	to	align	what	you	are	doing	to	some
larger	goal,	and	they	will	sometimes	change.	For	example,	if	one	of	your
strategic	goals	as	an	organization	is	to	decrease	the	time	to	market	for	new
features,	you	may	define	a	principle	that	says	that	delivery	teams	have	full
control	throughout	the	life	cycle	of	their	software	to	ship	whenever	they	are
ready,	independently	of	any	other	team.	If	another	goal	is	that	your	organization
is	moving	to	aggressively	grow	its	offerings	in	other	countries,	you	may	decide
to	implement	a	principle	that	the	entire	system	must	be	portable	to	allow	for	it	to
be	deployed	locally	in	order	to	respect	sovereignty	of	data.

You	probably	don’t	want	loads	of	these.	Fewer	than	10	principles	is	a	good
number—small	enough	for	people	to	remember	them,	or	to	fit	on	small	posters.
The	more	principles	you	have,	the	greater	the	chance	that	they	overlap	or
contradict	each	other.

Heroku’s	Twelve	Factors	is	a	set	of	design	principles	structured	around	the	goal
of	helping	you	create	applications	that	work	well	on	the	Heroku	platform.	These
principles	may	also	make	sense	in	other	contexts.	Some	of	them	are	actually
constraints	based	on	behaviors	your	application	needs	to	exhibit	in	order	to	work
on	Heroku.	A	constraint	is	really	something	that	is	very	hard	(or	virtually
impossible)	to	change,	whereas	principles	are	things	we	decide	to	choose.	You
may	decide	to	explicitly	call	out	those	things	that	are	principles	versus	those	that

are	constraints	to	help	highlight	those	things	you	really	can’t	change.	Personally,
I	think	there	can	be	some	value	in	keeping	them	in	the	same	list,	to	encourage
challenging	constraints	every	now	and	then	and	see	if	they	really	are	immovable!

Practices

Our	practices	are	how	we	ensure	our	principles	are	being	carried	out.	They	are	a
set	of	detailed,	practical	guidelines	for	performing	tasks.	They	will	often	be
technology	specific	and	should	be	low	level	enough	that	any	developer	can
understand	them.	Practices	could	include	coding	guidelines,	the	fact	that	all	log
data	needs	to	be	captured	centrally,	or	the	fact	that	HTTP/REST	is	the	standard
integration	style.	Due	to	their	technical	nature,	practices	will	typically	change
more	often	than	principles.

As	with	principles,	sometimes	practices	reflect	constraints	within	your
organization.	For	example,	if	you	have	decided	to	pick	Azure	as	your	cloud
platform,	this	will	need	to	be	reflected	in	your	practices.

Practices	should	underpin	your	principles.	A	principle	stating	that	delivery	teams
control	the	full	life	cycle	of	their	systems	may	mean	you	have	a	practice	stating
that	all	microservices	are	deployed	into	isolated	AWS	accounts,	providing	self-
service	management	of	the	resources	and	isolation	from	other	teams.

Combining	Principles	and	Practices

One	person’s	principles	are	another’s	practices.	You	might	decide	to	call	the	use
of	HTTP/REST	a	principle	rather	than	a	practice,	for	example.	And	that	would
be	fine.	The	key	point	is	that	there	is	value	in	having	overarching	ideas	that
guide	how	the	system	evolves,	and	in	having	enough	detail	so	that	people	know
how	to	implement	those	ideas.	For	a	small	enough	group,	perhaps	a	single	team,
combining	principles	and	practices	might	be	OK.	However,	for	larger
organizations,	where	the	technology	and	working	practices	may	differ	from
place	to	place,	you	may	want	a	different	set	of	practices	in	different	places,	as
long	as	they	all	map	to	a	common	set	of	principles.	A	.NET	team,	for	example,
might	have	one	set	of	practices,	and	a	Java	team	another.	The	principles,	though,
could	be	the	same	for	both.

A	Real-World	Example

An	old	colleague	of	mine,	Evan	Bottcher,	developed	the	diagram	shown	in
Figure	16-3	in	the	course	of	working	with	one	of	his	clients.	The	figure	shows
the	interplay	of	goals,	principles,	and	practices	in	a	very	clear	format.	Over	the
course	of	a	couple	of	years,	the	practices	on	the	far	right	will	change	fairly
regularly,	whereas	the	principles	remain	fairly	static.	A	diagram	such	as	this	can
be	printed	nicely	on	a	single	sheet	of	paper	and	shared,	and	each	idea	is	simple
enough	for	the	average	developer	to	remember.	There	is,	of	course,	more	detail
behind	each	point	here,	but	being	able	to	articulate	this	in	summary	form	is	very
useful.

Figure	16-3.	A	real-world	example	of	principles	and	practices

It	makes	sense	to	have	documentation	supporting	some	of	these	items,	and	even
better	is	having	working	code	that	shows	how	these	practices	can	be
implemented.	In	“The	Platform”,	we	looked	at	how	the	creation	of	a	common	set
of	tools	can	make	it	easy	for	developers	to	do	the	right	thing—ideally,	the
platform	should	make	following	these	practices	as	easy	as	possible,	and	as	the
practices	change,	the	platform	should	change	accordingly.

Guiding	an	Evolutionary	Architecture

So	if	our	architecture	is	not	static	but	is	ever-changing	and	evolving,	how	do	we
make	sure	it	is	growing	and	changing	in	the	way	we	want,	rather	than	just
mutating	into	some	unmanageable	giant	blob	of	pain,	suffering,	and
recriminations?	In	Building	Evolutionary	Architectures, 	the	authors	outline
fitness	functions	to	help	collect	information	about	the	relative	“fitness”	of	the
architecture	in	order	to	help	architects	decide	if	they	need	to	take	action.	From
the	book:

7

Evolutionary	computing	includes	a	number	of	mechanisms	that	allow	a
solution	to	gradually	emerge	via	small	changes	in	each	generation	of	the
software.	At	each	generation	of	the	solution,	the	engineer	assesses	the	current
state:	Is	it	closer	to	or	further	away	from	the	ultimate	goal?	For	example,
when	using	a	genetic	algorithm	to	optimize	wing	design,	the	fitness	function
assess[es]	wind	resistance,	weight,	air	flow,	and	other	characteristics
desirable	to	good	wing	design.	Architects	define	a	fitness	function	to	explain
what	better	is	and	to	help	measure	when	the	goal	is	met.	In	software,	fitness
functions	check	that	developers	preserve	important	architectural
characteristics.

The	idea	of	a	fitness	function	is	that	it	is	used	to	understand	the	current	state	of
some	important	property,	such	that	if	that	property	changes	outside	of	some
allowable	bounds,	then	the	change	needs	to	be	looked	into.	Typically,	fitness
functions	will	be	used	to	ensure	that	the	architecture	is	being	built	to	follow	the
principles	and	constraints	that	have	been	laid	down.

To	borrow	an	example	from	Building	Evolutionary	Architectures,	consider	the
requirement	that	the	response	from	a	given	service	must	be	received	in	100	ms
or	less.	You	could	implement	a	fitness	function	to	collect	performance	data	from
this	service,	perhaps	either	in	a	performance	test	environment	or	from	a	real-
world	running	system	to	ensure	that	the	actual	behavior	of	the	system	meets	the
requirements.	Building	Evolutionary	Architectures	goes	into	a	lot	more	detail	on
this	topic,	and	I	thoroughly	recommend	it	if	you	want	to	explore	this	concept
further.

Fitness	functions	for	architecture	can	come	in	many	shapes	and	forms.	The
fundamental	concept,	though,	is	that	you	collect	real-world	data	to	understand

whether	or	not	your	architecture	is	achieving	“fitness”	against	that	criteria.	This
could	relate	to	system	performance,	code	coupling,	cycle	time,	or	a	host	of	other
aspects.	These	fitness	functions	act	as	another	source	of	information	to	help	an
architect	understand	where	they	might	need	to	get	involved.	Please	note,
however,	that	for	me,	fitness	functions	work	best	when	combined	with	close
collaboration	with	the	people	building	the	system.	Fitness	functions	should	be	a
useful	way	to	help	you	understand	if	the	architecture	is	moving	in	the	right
direction,	but	they	don’t	replace	the	need	to	actually	speak	with	people	on	the
ground.	In	fact,	I’d	suggest	that	defining	the	right	fitness	functions	will	require
close	collaboration.

Architecture	in	a	Stream-Aligned	Organization

In	Chapter	15,	we	looked	at	how	modern	software	delivery	organizations	are
shifting	toward	a	more	stream-aligned	model	in	which	autonomous	independent
teams	focus	on	the	end-to-end	delivery	of	functionality,	with	their	priorities
being	product	driven.	We	also	talked	about	cross-cutting	teams—enabling	teams
that	support	stream-aligned	teams.	Where	does	the	architect	fit	into	this	world?
Well,	sometimes	the	scope	of	a	stream-aligned	team	is	complex	enough	to
require	a	dedicated	architect	(here	again	we	often	see	a	blurring	of	the	lines
between	the	traditional	technical	lead	and	architect	roles).	In	many	cases,
though,	architects	are	asked	to	work	across	multiple	teams.

Many	of	the	responsibilities	of	the	architect	can	be	seen	as	enabling
responsibilities—clearly	communicating	technical	vision,	understanding
challenges	as	they	emerge,	and	helping	adapt	the	technical	vision	accordingly.
The	architect	helps	connect	people,	keeping	an	eye	on	the	bigger	picture	and
helping	teams	understand	how	what	they	are	doing	fits	into	the	greater	whole.
This	fits	neatly	into	the	idea	of	an	architect	being	part	of	an	enabling	team,	as	we
see	in	Figure	16-4.	Such	an	enabling	team	could	consist	of	a	mix	of	people—
perhaps	folks	who	are	dedicated	to	the	team	full-time,	and	others	who	pitch	in	to
help	from	time	to	time.

Figure	16-4.	An	architecture	function	as	an	enabling	team

A	model	I	greatly	favor	is	to	have	a	small	number	of	dedicated	architects	in	this
team	(perhaps	just	one	or	two	people	in	many	cases),	but	having	this	team
augmented	over	time	with	technologists	from	each	delivery	team—the	technical
leads	of	each	team	at	a	minimum.	The	architect	is	responsible	for	making	sure
the	group	works.	This	distributes	the	work	and	ensures	that	there	is	a	higher
level	of	buy-in.	It	also	ensures	that	information	flows	freely	from	the	teams	into
the	group,	and	as	a	result,	the	decision	making	is	much	more	sensible	and
informed.

Sometimes	the	group	may	make	decisions	that	the	architect	disagrees	with.	At
this	point,	what	is	the	architect	to	do?	Having	been	in	this	position	before,	I	can
tell	you	this	is	one	of	the	most	challenging	situations	to	face.	Often	I	take	the
approach	that	I	should	go	with	the	group	decision.	I	take	the	view	that	I’ve	done
my	best	to	convince	people,	but	ultimately	I	wasn’t	convincing	enough.	The
group	is	often	much	wiser	than	the	individual,	and	I’ve	been	proven	wrong	more
than	once!	And	imagine	how	disempowering	it	can	be	for	a	group	to	have	been
given	space	to	come	up	with	a	decision	and	then	ultimately	be	ignored.	But
sometimes	I	have	overruled	the	group.	But	why,	and	when?	How	do	you	draw
the	lines?

Think	about	teaching	a	child	to	ride	a	bike.	You	can’t	ride	it	for	them.	You	watch
them	wobble,	but	if	you	step	in	every	time	it	looks	like	they	might	fall	off,	then

they’ll	never	learn,	and	in	any	case	they	fall	off	far	less	than	you	think	they	will!
But	if	you	see	them	about	to	veer	into	traffic	or	into	a	nearby	duck	pond,	then
you	have	to	step	in.	Of	course,	I’ve	frequently	been	proven	wrong	in	such
situations—I’ve	let	the	team	go	off	and	do	something	that	I	felt	was	wrong,	and
what	they	did	worked!	Likewise,	as	an	architect,	you	need	to	have	a	firm	grasp
of	when,	figuratively,	your	team	is	steering	into	a	duck	pond.	You	also	need	to	be
aware	that	even	if	you	know	you	are	right	and	overrule	the	team,	this	can
undermine	your	position	and	also	make	the	team	feel	that	they	don’t	have	a	say.
Sometimes	the	right	thing	is	to	go	along	with	a	decision	you	don’t	agree	with.
Knowing	when	to	do	this	and	when	not	to	is	tough	but	sometimes	vital.

Where	things	get	interesting,	as	we’ll	discuss	shortly,	is	when	an	architect	also
has	to	get	involved	in	governance	activities.	This	can	cause	some	confusion
about	the	role	of	any	cross-cutting	architecture	team.	What	happens	when	one
team	diverges	from	the	technical	strategy?	Is	that	OK?	Perhaps	it’s	a	sensible
exception,	but	it	might	also	cause	more	fundamental	issues.	A	short-term
decision	made	in	the	name	of	expediency	might	compromise	bigger	changes	that
are	trying	to	be	made.	Imagine	that	the	architecture	group	is	trying	to	help	shift
the	organization	away	from	the	use	of	centralized	data	due	to	the	coupling	and
operational	issues	it	causes,	but	one	of	the	teams	decides	to	just	throw	some	new
data	into	a	shared	database,	as	it	is	under	pressure	to	deliver	quickly.	What
happens	then?

In	my	experience,	this	all	comes	down	to	good,	clear	communication	and	an
understanding	of	responsibilities.	If	I	saw	a	product	owner	making	decisions	that
I	felt	were	going	to	undermine	some	sort	of	cross-cutting	activities	I	was
working	toward,	I’d	go	and	have	a	chat	with	them.	Perhaps	the	answer	is	that	the
short-term	decision	is	right	(and	arguably	this	ends	up	being	some	sort	of
technical	debt	that	we	have	consciously	taken	onboard).	In	other	cases,	perhaps
the	product	owner	is	able	to	change	what	they	are	planning	to	help	work	with	the
overall	strategy.	In	the	worst	cases,	the	issue	might	need	to	be	escalated.

At	REA,	the	online	real-estate	company	I’ve	talked	about	in	a	few	earlier
chapters,	product	owners	would	occasionally	make	decisions	to	prioritize	work
in	such	a	way	that	it	caused	technical	debt	to	build	up,	leading	to	subsequent
problems.	The	issue	was	that	the	product	owners	were	primarily	held	to	account
in	regard	to	their	ability	to	deliver	features	and	make	customers	happy—whereas

often	the	issues	around	technical	debt	were	laid	at	the	feet	of	the	technical
leaders.	A	shift	was	made	to	make	the	product	owners	also	responsible	for
aspects	of	the	software	that	were	technical	in	nature—this	meant	that	they	had	to
take	a	more	active	role	in	understanding	the	more	technical	aspects	of	the	system
(security	or	performance,	for	example)	and	work	more	collaboratively	with	the
technical	experts	in	terms	of	prioritizing	work	to	be	done.	The	act	of	making
nontechnical	product	owners	more	accountable	for	prioritization	around
technical	activities	is	nontrivial,	but	it	is	absolutely	worth	it	in	my	experience.

Building	a	Team

Being	the	main	point	person	for	the	technical	vision	of	your	system	and	ensuring
that	you’re	executing	on	this	vision	isn’t	just	about	making	sure	the	right
technology	decisions	get	made.	It’s	the	people	you	work	with	who	will	be	doing
the	work.	It	is	the	role	of	any	technical	leader	to	help	these	people	grow—to	help
them	be	part	of	creating	that	vision—and	to	ensure	that	they	can	be	active
participants	in	shaping	and	implementing	the	vision	too.

Helping	the	people	around	you	with	their	own	career	growth	can	take	many
forms,	most	of	which	are	outside	the	scope	of	this	book.	There	is	one	aspect,
though,	in	which	a	microservice	architecture	is	especially	relevant.	With	larger,
monolithic	systems,	there	are	fewer	opportunities	for	people	to	step	up	and
“own”	something.	With	microservices,	on	the	other	hand,	we	have	multiple
autonomous	codebases	that	will	have	their	own	independent	life	cycles.	Helping
people	step	up	by	having	them	take	ownership	of	individual	microservices
before	accepting	more	responsibility	can	be	a	great	way	to	help	them	achieve
their	own	career	goals,	and	at	the	same	time	it	lightens	the	load	on	whomever	is
in	charge!

I	am	a	strong	believer	that	great	software	comes	from	great	people.	If	you	worry
only	about	the	technology	side	of	the	equation,	you’re	missing	way	more	than
half	the	picture.

The	Required	Standard

When	you’re	working	through	your	practices	and	thinking	about	the	trade-offs

you	need	to	make,	one	of	the	most	important	balances	to	find	is	how	much
variability	to	allow	in	your	system.	One	of	the	key	ways	to	identify	what	should
be	constant	from	microservice	to	microservice	is	to	define	what	a	well-behaved,
good	microservice	looks	like.	What	is	a	“good	citizen”	microservice	in	your
system?	What	capabilities	does	it	need	to	have	to	ensure	that	your	system	is
manageable,	and	that	one	bad	microservice	doesn’t	bring	down	the	whole
system?	As	with	people,	what	a	“good	citizen”	microservice	is	in	one	context
does	not	reflect	what	it	looks	like	somewhere	else.	Nonetheless,	there	are	some
common	characteristics	of	well-behaved	microservices	that	I	think	are	fairly
important	to	observe.	These	are	the	few	key	areas	in	which	allowing	too	much
divergence	can	result	in	a	pretty	horrid	time.	As	Ben	Christensen	from	Facebook
puts	it,	when	you	think	about	the	bigger	picture,	“it	needs	to	be	a	cohesive
system	made	of	many	small	parts	with	autonomous	life	cycles	but	all	coming
together.”	So	you	need	to	find	a	balance	in	which	you	optimize	for	the	autonomy
of	individual	microservices	without	losing	sight	of	the	bigger	picture.	Defining
clear	attributes	that	each	microservice	should	have	is	one	way	of	being	clear	as
to	where	that	balance	sits.	Let’s	touch	on	some	of	those	attributes.

Monitoring

It	is	essential	that	we	are	able	to	draw	up	coherent,	cross-service	views	of	our
system	health.	This	has	to	be	a	system-wide	view,	not	a	microservice-specific
view.	As	we	discussed	in	Chapter	10,	knowing	the	health	of	an	individual
microservice	is	useful,	but	often	only	when	you’re	trying	to	diagnose	a	wider
problem	or	understand	a	larger	trend.	To	make	this	as	easy	as	possible,	I	would
suggest	ensuring	that	all	microservices	emit	health-related	and	general-
monitoring-related	metrics	in	the	same	way.

You	might	choose	to	adopt	a	push	mechanism,	where	each	microservice	needs	to
push	this	data	into	a	central	location.	Whatever	you	pick,	try	to	keep	it
standardized.	Make	the	technology	inside	the	box	opaque,	and	don’t	require	that
your	monitoring	systems	change	in	order	to	support	it.	Logging	falls	into	the
same	category	here:	we	need	it	in	one	place.

Interfaces

Picking	a	small	number	of	defined	interface	technologies	helps	integrate	new

consumers.	Having	one	standard	is	good.	Two	isn’t	too	bad,	either.	Having
twenty	different	styles	of	integration	is	not	good.	This	isn’t	just	about	picking	the
technology	and	the	protocol.	If	you	pick	HTTP/REST,	for	example,	will	you	use
verbs	or	nouns?	How	will	you	handle	pagination	of	resources?	How	will	you
handle	versioning	of	endpoints?

Architectural	Safety

We	cannot	afford	for	one	badly	behaved	microservice	to	ruin	the	party	for
everyone.	We	have	to	ensure	that	our	microservices	shield	themselves
accordingly	from	unhealthy,	downstream	calls.	The	more	microservices	we	have
that	do	not	properly	handle	the	potential	failure	of	downstream	calls,	the	more
fragile	our	systems	will	be.	This	might	mean,	for	example,	that	you	want	to
mandate	certain	practices	around	inter-service	communication,	such	as	requiring
the	use	of	circuit	breakers	(a	topic	we	explored	in	“Stability	Patterns”).

Playing	by	the	rules	is	important	when	it	comes	to	response	codes,	too.	If	your
circuit	breakers	rely	on	HTTP	codes,	and	one	microservice	decides	to	send	back
2XX	codes	for	errors	or	confuses	4XX	codes	with	5XX	codes,	then	these	safety
measures	can	fall	apart.	Similar	concerns	would	apply	even	if	you’re	not	using
HTTP;	we	need	to	know	the	difference	between	a	request	that	was	OK	and
processed	correctly,	a	request	that	was	bad	and	thus	prevented	the	microservice
from	doing	anything	with	it,	and	a	request	that	might	be	OK	but	we	can’t	tell
because	the	server	was	down.	Knowing	this	is	key	to	ensuring	we	can	fail	fast
and	track	down	issues.	If	our	microservices	play	fast	and	loose	with	these	rules,
we	end	up	with	a	more	vulnerable	system.

Governance	and	the	Paved	Road

Part	of	what	architects	need	to	handle	is	governance.	What	do	I	mean	by
governance?	It	turns	out	the	COBIT	(Control	Objectives	for	Information
8
Technologies)	framework	has	a	pretty	good	definition:

Governance	ensures	that	enterprise	objectives	are	achieved	by	evaluating
stakeholder	needs,	conditions	and	options;	setting	direction	through
prioritization	and	decision	making;	and	monitoring	performance,	compliance
and	progress	against	agreed-on	direction	and	objectives.

In	a	nutshell,	we	can	consider	governance	as	agreeing	how	things	should	be
done,	making	sure	people	know	how	things	should	be	done,	and	making	sure
things	are	done	that	way.	In	some	environments,	governance	just	happens
informally,	as	part	of	normal	software	development	activities.	In	other
environments,	especially	within	larger	organizations,	this	might	need	to	be	a
more	concrete	function.

Governance	can	apply	to	multiple	things	in	the	forum	of	IT.	We	want	to	focus	on
the	aspect	of	technical	governance,	something	I	feel	is	the	job	of	the	architect.	If
one	of	the	architect’s	jobs	is	ensuring	there	is	a	technical	vision,	then	governance
is	about	ensuring	that	what	we	are	building	matches	this	vision,	and	evolving	the
vision	if	needed.

Fundamentally,	governance	should	be	a	group	activity.	A	properly	functioning
governance	group	can	work	together	to	share	the	work	and	shape	the	vision.	It
could	be	an	informal	chat	with	a	small	enough	team,	or	a	more	structured	regular
meeting	with	formal	group	membership	for	a	larger	scope.	This	is	where	I	think
the	principles	we	covered	earlier	should	be	discussed	and	changed	as	required.	If
a	formal	group	is	required,	this	group	needs	to	consist	predominantly	of	people
who	are	executing	the	work	being	governed.	This	group	should	also	be
responsible	for	tracking	and	managing	technical	risks.

Getting	together	and	agreeing	on	how	things	can	be	done	is	a	good	idea.	But
spending	time	making	sure	people	are	following	these	guidelines	is	less	fun,	as	is
placing	a	burden	on	developers	to	implement	all	these	standard	things	you
expect	each	microservice	to	do.	I	am	a	great	believer	in	making	it	easy	to	do	the
right	thing—and	as	we	discussed	in	Chapter	15,	the	paved	road	is	a	really	useful
concept	here.	The	architect	has	a	role	to	clearly	articulate	the	vision—where	you
are	going—and	to	make	it	easy	to	get	there.	As	such,	they	should	be	involved	in
helping	shape	the	requirements	of	whatever	paved	road	you	build.	For	many,	the
platform	will	be	the	biggest	example	of	this—the	architect	ends	up	being	an
important	stakeholder	for	the	platform	team.

We’ve	already	looked	at	the	role	of	the	platform	in	some	depth,	so	let’s	look	at	a
couple	of	other	techniques	we	can	use	to	make	it	as	easy	as	possible	for	people
to	do	the	right	thing.

Exemplars

Written	documentation	is	good	and	useful.	I	clearly	see	the	value	in	it;	after	all,
I’ve	written	this	book.	But	developers	also	like	code—code	they	can	run	and
explore.	If	you	have	a	set	of	standards	or	best	practices	you	would	like	to
encourage,	then	having	exemplars	you	can	point	people	to	is	useful.	The	idea	is
that	people	can’t	go	far	wrong	just	by	imitating	some	of	the	better	parts	of	your
system.

Ideally,	these	should	be	real-world	microservices	running	in	your	system	that	get
things	right,	rather	than	isolated	microservices	that	are	implemented	merely	as
“perfect	examples.”	By	ensuring	your	exemplars	are	actually	being	used,	you
ensure	that	all	the	principles	you	have	actually	make	sense.

Tailored	Microservice	Template

Wouldn’t	it	be	great	if	you	could	make	it	really	easy	for	all	developers	to	follow
most	of	the	guidelines	you	have	with	very	little	work?	What	if,	out	of	the	box,
the	developers	had	most	of	the	code	in	place	to	implement	the	core	attributes	that
each	microservice	needs?

Many	frameworks	exist	for	different	programming	languages	that	attempt	to
give	you	the	building	blocks	for	your	own	microservice	template.	Spring	Boot	is
probably	the	most	successful	example	of	such	a	framework	for	the	JVM.	The
core	Spring	Boot	framework	is	fairly	light,	but	you	can	then	decide	to	pull
together	a	set	of	libraries	to	provide	features	like	checking	health,	serving	HTTP,
or	exposing	metrics.	So	right	out	of	the	box,	you	have	a	simple	“Hello	World”
microservice	that	can	be	launched	from	the	command	line.

Many	people	then	take	these	frameworks	and	standardize	this	setup	for	their
company.	For	example,	when	spinning	up	a	new	microservice,	they	may	script
things	so	that	they	get	a	Spring	Boot	template	with	the	core	libraries	their
organization	uses	already	wired	in;	it	might	already	pull	in	the	libraries	to	handle
circuit	breakers	and	be	configured	to	handle	JWT	authentication	for	inbound
calls.	Normally,	such	an	automated	template	creation	would	create	a	matching
build	pipeline	as	well.

Caution	warranted

The	selection	and	configuration	of	these	tailored	microservices	templates	is

commonly	a	task	for	the	platform	team.	They	might,	for	example,	provide	a
template	for	each	supported	language,	ensuring	that	when	using	the	template	the
resulting	microservices	work	well	with	the	platform	itself.	This	can	cause
challenges,	however.

I	have	seen	many	a	team’s	morale	and	productivity	destroyed	by	having	a
mandated	framework	thrust	upon	it.	In	a	drive	to	improve	code	reuse,	more	and
more	work	is	placed	into	a	centralized	framework	until	it	becomes	an
overwhelming	monstrosity.	If	you	decide	to	use	a	tailored	microservice	template,
think	very	carefully	about	what	its	job	is.	Ideally,	its	use	should	be	purely
optional,	but	if	you	are	going	to	be	more	forceful	in	its	adoption,	you	need	to
understand	that	ease	of	use	for	the	developers	has	to	be	a	prime	guiding	force.
Allowing	the	developers	who	use	the	template	to	recommend	and	even
contribute	changes	to	the	framework,	perhaps	as	part	of	an	internal	open	source
model,	can	help	greatly	here.

As	we	discussed	in	“DRY	and	the	Perils	of	Code	Reuse	in	a	Microservice
World”,	we	have	to	be	aware	of	the	perils	of	shared	code.	In	our	desire	to	create
reusable	code,	we	can	introduce	sources	of	coupling	between	microservices.	At
least	one	organization	I	spoke	to	is	so	worried	about	this	that	it	actually	copies	its
microservice	template	code	manually	into	each	microservice.	This	means	that	an
upgrade	to	the	core	microservice	template	takes	longer	to	be	applied	across	its
system,	but	this	is	less	concerning	to	the	organization	than	the	danger	of
coupling.	Other	teams	I’ve	spoken	to	have	simply	treated	the	microservice
template	as	a	shared	binary	dependency,	although	they	have	to	be	very	diligent
in	not	letting	the	tendency	for	DRY	(don’t	repeat	yourself)	result	in	an	overly
coupled	system!

The	Paved	Road	at	Scale

The	use	of	in-house	internal	microservice	templates	and	frameworks	is	often
found	in	organizations	that	have	large	numbers	of	microservices.	Netflix	and
Monzo	are	two	such	organizations.	Each	has	decided	to	standardize	on	its
technology	stack	to	some	degree	(the	JVM	in	the	case	of	Netflix,	Go	in	terms	of
Monzo),	allowing	it	to	speed	up	the	creation	of	a	new	microservice	with
standard,	expected	behavior	by	using	a	common	set	of	tools.	With	a	more
divergent	technology	stack,	having	a	standard	microservice	template	for	your

own	needs	becomes	more	difficult.

If	you	were	to	embrace	multiple	disparate	technology	stacks,	you’d	need	a
matching	microservice	template	for	each.	This	could	be	a	way	you	subtly
constrain	language	choices	in	your	teams,	though.	If	the	in-house	microservice
template	supports	only	the	JVM,	then	people	may	be	discouraged	from	picking
alternative	stacks	if	they	have	to	do	lots	more	work	themselves.	Netflix,	for
example,	is	especially	concerned	with	aspects	like	fault	tolerance	to	ensure	that
the	outage	of	one	part	of	its	system	cannot	take	everything	down.	To	handle	this,
a	large	amount	of	work	has	been	done	to	ensure	that	there	are	client	libraries	on
the	JVM	to	provide	teams	with	the	tools	they	need	to	keep	their	microservice
well	behaved.	Introducing	a	new	technology	stack	would	mean	having	to
reproduce	all	this	effort.	The	main	concern	for	Netflix	is	less	about	the
duplicated	effort	and	more	about	the	fact	that	it	is	so	easy	to	get	this	wrong.	The
risk	of	a	microservice	getting	newly	implemented	fault	tolerance	wrong	is	high	if
it	could	impact	more	of	the	system.	Netflix	mitigates	this	by	using	“sidecar
services,”	which	communicate	locally	with	a	JVM	that	is	using	the	appropriate
libraries.

Service	meshes	have	given	us	another	potential	way	to	offload	common
behavior.	Some	functionality	that	was	commonly	seen	as	an	internal
microservice’s	responsibility	can	now	be	pushed	to	a	microservice	mesh.	This
can	ensure	more	consistency	of	behavior	across	microservices	written	in
different	programming	languages	and	also	reduce	the	responsibilities	of	these
microservice	templates.

Technical	Debt

We	are	often	put	in	situations	in	which	we	cannot	follow	through	to	the	letter	on
our	technical	vision.	Often,	we	need	to	make	a	choice	to	cut	a	few	corners	to	get
some	urgent	features	out.	This	is	just	one	more	trade-off	that	we’ll	find	ourselves
having	to	make.	Our	technical	vision	exists	for	a	reason.	If	we	deviate	from	this
reason,	it	might	have	a	short-term	benefit	but	a	long-term	cost.	A	concept	that
helps	us	understand	this	trade-off	is	technical	debt.	When	we	accrue	technical
debt,	just	like	debt	in	the	real	world	it	has	an	ongoing	cost	and	is	something	we
want	to	pay	down.

Sometimes	technical	debt	isn’t	just	something	we	cause	by	taking	shortcuts.
What	happens	if	our	vision	for	the	system	changes,	but	not	all	of	our	system
matches?	In	this	situation,	too,	we	have	created	new	sources	of	technical	debt.

The	architect’s	job	is	to	look	at	the	bigger	picture	and	understand	this	balance.
Having	some	view	as	to	the	level	of	debt	and	where	to	get	involved	is	important.
Depending	on	your	organization,	you	might	be	able	to	provide	gentle	guidance,
but	have	the	teams	themselves	decide	how	to	track	and	pay	down	the	debt.	For
other	organizations,	you	may	need	to	be	more	structured,	perhaps	maintaining	a
debt	log	that	is	reviewed	regularly.

Exception	Handling

So	our	principles	and	practices	guide	how	our	systems	should	be	built.	But	what
happens	when	our	system	deviates	from	that?	Sometimes	we	make	a	decision
that	is	just	an	exception	to	the	rule.	In	these	cases,	it	might	be	worth	capturing
such	a	decision	in	a	log	somewhere	for	future	reference.	If	enough	exceptions	are
found,	it	may	eventually	make	sense	to	change	the	applicable	principle	or
practice	to	reflect	a	new	understanding	of	the	world.	For	example,	we	might
have	a	practice	that	states	that	we	will	always	use	MySQL	for	data	storage.	But
then	we	see	compelling	reasons	to	use	Cassandra	for	highly	scalable	storage,	at
which	point	we	change	our	practice	to	say,	“Use	MySQL	for	most	storage
requirements,	unless	you	expect	large	growth	in	volumes,	in	which	case	use
Cassandra.”

It’s	worth	reiterating,	though,	that	every	organization	is	different.	I’ve	worked
with	some	companies	at	which	the	development	teams	have	a	high	degree	of
trust	and	autonomy,	and	the	principles	are	lightweight	(and	the	need	for	overt
exception	handling	is	greatly	reduced,	if	not	eliminated).	In	more	structured
organizations	in	which	developers	have	less	freedom,	tracking	exceptions	may
be	vital	to	ensuring	that	the	rules	in	place	properly	reflect	the	challenges	people
are	facing.	With	all	that	said,	I	am	a	fan	of	microservices	as	a	way	of	optimizing
for	autonomy	of	teams,	giving	them	as	much	freedom	as	possible	to	solve	the
problem	at	hand.	If	you	are	working	in	an	organization	that	places	lots	of
restrictions	on	how	developers	can	do	their	work,	then	microservices	may	not	be
for	you.

Summary

To	summarize	this	chapter,	here	are	what	I	see	as	the	core	responsibilities	of	the
evolutionary	architect:

Vision

Ensure	there	is	a	clearly	communicated	technical	vision	for	the	system	that
will	help	it	meet	the	requirements	of	your	customers	and	organization.

Empathy

Understand	the	impact	of	your	decisions	on	your	customers	and	colleagues.

Collaboration

Engage	with	as	many	of	your	peers	and	colleagues	as	possible	to	help	define,
refine,	and	execute	the	vision

Adaptability

Make	sure	that	the	technical	vision	changes	as	required	by	your	customers	or
organization.

Autonomy

Find	the	right	balance	between	standardizing	and	enabling	autonomy	for
your	teams.

Governance

Ensure	that	the	system	being	implemented	fits	the	technical	vision,	and	make
sure	it	is	easy	for	people	to	do	the	right	thing.

The	evolutionary	architect	is	one	who	understands	that	demonstrating	these	core
responsibilities	is	a	constant	balancing	act.	Forces	are	always	pushing	us	one
way	or	another,	and	understanding	where	to	push	back	or	where	to	go	with	the
flow	is	often	something	that	comes	only	with	experience.	But	the	worst	reaction
to	all	these	forces	that	push	us	toward	change	is	to	become	more	rigid	or	fixed	in
our	thinking.

While	much	of	the	advice	in	this	chapter	can	apply	to	any	systems	architect,
microservices	give	us	many	more	decisions	to	make.	Therefore,	being	better	able
to	balance	all	of	these	trade-offs	is	essential.	If	you	want	to	explore	this	topic	in
more	depth,	I	can	recommend	the	already	quoted	Building	Evolutionary
9
Architectures,	as	well	as	Gregor	Hohpe’s	The	Software	Architect	Elevator,
which	helps	architects	understand	how	they	can	bridge	the	gap	between	high-
level	strategic	thinking	and	on-the-ground	delivery.

We’re	almost	at	the	end	of	the	book,	and	we’ve	covered	a	lot	of	ground.	In	the
Afterword,	we’ll	now	summarize	what	we’ve	learned.

1 	For	several	reasons,	not	the	least	of	which	is	that	I	have	a	degree	in	software	engineering…

2 	This	is	from	an	email	exchange	on	the	extreme	programming	mailing	list,	which	Martin	Fowler	then

shared	in	his	article	“Who	Needs	an	Architect?”.

3 	Elevators,	for	my	North	American	readers.

4 	Grady	Booch	(@Grady_Booch),	Twitter,	September	4,	2020,	5:12	a.m.,	https://oreil.ly/ZgPRZ.

5 	Jon	Moore,	“Architecture	with	800	of	My	Closest	Friends:	The	Evolution	of	Comcast’s	Architecture

Guild,”	InfoQ,	May	14,	2019,	https://oreil.ly/aIvbi.

6 	Richard	Gabriel,	Patterns	of	Software:	Tales	from	the	Software	Community	(New	York:	Oxford

University	Press,	1996).

7 	Neal	Ford,	Rebecca	Parsons,	and	Patrick	Kua,	Building	Evolutionary	Architectures	(Sebastopol:

O’Reilly,	2017).

8 	COBIT	5:	A	Business	Framework	for	the	Governance	and	Management	of	Enterprise	IT	(Rolling

Meadows,	IL:	ISACA,	2012).

9 	Gregor	Hohpe,	The	Software	Architect	Elevator	(Sebastopol:	O’Reilly,	2020).

Afterword:	Bringing	It	All	Together

This	book	has	covered	a	lot	of	ground,	and	I’ve	shared	a	lot	of	advice	along	the
way.	Given	the	breadth	of	coverage,	I	thought	it	sensible	to	summarize	some	of
my	key	advice	regarding	microservice	architectures.	For	those	of	you	who	have
read	the	whole	book,	this	should	be	a	great	refresher.	For	those	of	you	who	are
impatient	and	jumped	to	the	end,	be	aware	that	there	is	a	lot	of	detail	behind	this
advice,	and	I’d	urge	you	read	up	on	the	detail	behind	some	of	these	ideas	rather
than	just	adopting	these	ideas	blindly.

With	all	that	said,	I’m	aiming	to	keep	this	last	chapter	as	brief	as	possible,	so
let’s	get	started.

What	Are	Microservices?

As	introduced	in	Chapter	1,	microservices	are	a	type	of	service-oriented
architecture	that	focuses	on	independent	deployability.	Independent	deployability
means	that	you	can	make	a	change	to	a	microservice,	deploy	that	microservice,
and	release	its	functionality	to	the	end	users	without	requiring	other
microservices	to	change.	Getting	the	most	out	of	a	microservice	architecture
means	embracing	this	concept.	Normally,	each	microservice	is	deployed	as	a
process,	with	communication	with	other	microservices	being	done	over	some
form	of	network	protocol.	It’s	common	to	deploy	multiple	instances	of	a
microservice,	perhaps	so	that	you	can	provide	more	scale,	or	else	to	improve
robustness	by	having	redundancy.

To	deliver	independent	deployability,	we	need	to	make	sure	when	changing	one
microservice	that	we	don’t	break	interactions	with	other	microservices.	This
requires	that	our	interfaces	with	other	microservices	are	stable,	and	that	changes
be	made	in	a	backward-compatible	way.	Information	hiding,	which	I	expanded
on	in	Chapter	2,	describes	an	approach	in	which	as	much	information	as	possible
(code,	data)	is	hidden	behind	an	interface.	You	should	expose	only	the	bare
minimum	over	your	service	interfaces	to	satisfy	your	consumers.	The	less	you
expose,	the	easier	it	is	to	ensure	the	changes	you	make	are	going	to	be	backward
compatible.	Information	hiding	also	allows	us	to	make	technological	changes
within	a	microservice	boundary	in	a	way	that	won’t	impact	consumers.

One	of	the	key	ways	we	implement	independent	deployability	is	by	hiding	the

database.	If	a	microservice	needs	to	store	state	in	a	database,	this	should	be
entirely	hidden	from	the	outside	world.	Internal	databases	should	not	be	directly
exposed	to	external	consumers,	as	this	causes	too	much	coupling	between	the
two,	which	undermines	independent	deployability.	In	general,	avoid	situations	in
which	multiple	microservices	all	access	the	same	database.

Microservices	work	very	well	with	domain-driven	design	(DDD).	DDD	gives	us
concepts	that	help	us	find	our	microservice	boundaries,	with	the	resulting
architecture	being	aligned	around	the	business	domain.	This	is	extremely	helpful
in	situations	where	organizations	are	creating	more	business-centric	IT	teams.
With	a	team	focused	on	one	part	of	the	business	domain,	it	can	now	take
ownership	of	the	microservices	that	match	this	part	of	the	business.

Moving	to	Microservices

Microservices	bring	a	lot	of	complexity—enough	complexity	that	the	reasons	for
using	them	need	to	be	seriously	considered.	I	remain	convinced	that	a	simple
single-process	monolith	is	a	totally	sensible	starting	point	for	a	new	system.
Over	time,	though,	we	learn	things,	and	we	start	to	see	the	ways	in	which	our
current	system	architecture	is	no	longer	fit	for	purpose.	At	that	point,	looking	to
change	is	appropriate.

It	is	important	to	understand	what	you	are	trying	to	get	out	of	a	microservice
architecture.	What	is	the	goal?	What	positive	outcome	do	you	expect	a	shift	to
microservices	to	bring?	The	outcome	you	are	aiming	for	will	directly	impact
how	you	break	your	monolith	apart.	If	you	are	trying	to	change	your	system
architecture	to	better	handle	scale,	you’ll	end	up	making	different	changes	than	if
your	main	driver	is	to	improve	organizational	autonomy.	I	cover	this	more	in
Chapter	3,	and	in	even	more	detail	in	my	book	Monolith	to	Microservices.

Many	of	the	problems	with	microservices	are	evident	only	after	you	hit
production.	Therefore,	I	strongly	recommend	an	incremental,	evolutionary
decomposition	of	an	existing	monolith	rather	than	a	“big	bang”	rewrite.	Identify
a	microservice	you	want	to	create,	extract	the	appropriate	functionality	from	the
monolith,	deploy	the	new	microservice	into	production,	and	start	using	it	in
anger.	Based	on	that,	you’ll	see	if	you	are	helping	move	toward	your	goal,	but
you’ll	also	learn	a	lot	that	will	make	the	next	microservice	extraction	easier—or

perhaps	it	will	suggest	to	you	that	microservices	might	not	be	the	way	forward
after	all!

Communication	Styles

We	summarized	the	main	forms	of	inter-microservice	communication	in
Chapter	4,	shared	again	in	Figure	E-1.	This	isn’t	meant	to	be	a	universal	model
but	is	intended	to	just	give	an	overview	of	the	different	types	of	communication
that	are	most	common.

Figure	E-1.	Different	styles	of	inter-microservice	communication	along	with	example	implementing
technologies

With	request-response	communication,	a	microservice	sends	a	request	to	a
downstream	microservice	and	expects	a	response.	With	synchronous	request-
response,	we	would	expect	the	response	to	come	back	to	the	microservice
instance	that	sent	the	request.	With	asynchronous	request-response,	it’s	possible
for	the	response	to	come	back	to	a	different	instance	of	the	upstream
microservices.

With	event-driven	communication,	a	microservice	emits	an	event,	and	other
microservices,	if	they	are	interested	in	that	event,	can	react	to	it.	Events	are	just
statements	of	fact—information	that	is	shared	about	something	that	has
happened.	With	event-driven	communication,	a	microservice	doesn’t	tell	another
microservice	what	to	do;	it	just	shares	events.	It’s	up	to	downstream
microservices	to	make	a	judgment	call	as	to	what	they	do	with	that	information.
Event-driven	communication	is	by	definition	asynchronous	in	nature.

One	microservice	may	communicate	over	more	than	one	protocol.	For	example,

in	Figure	E-2	we	see	a	Shipping	microservice	providing	a	REST	interface	for
request-response	interaction,	which	also	fires	events	when	changes	are	made.

Figure	E-2.	A	microservice	exposing	its	functionality	over	a	REST	API	and	a	topic

Event-driven	collaboration	can	make	it	easier	to	build	more	loosely	coupled
architectures,	but	it	can	require	more	work	to	understand	how	the	system	is
behaving.	This	type	of	communication	also	often	requires	the	use	of	specialist
technology	such	as	message	brokers,	which	can	further	complicate	matters.	If
you	can	use	a	fully	managed	message	broker,	that	can	help	lower	the	cost	of
these	types	of	systems.

Request-response	and	event-driven	interaction	models	both	have	their	place,	and
often	which	one	you	use	will	be	a	personal	preference.	Some	problems	just	fit
one	model	more	than	another,	and	it’s	common	for	a	microservice	architecture	to
have	a	mix	of	styles.

Workflow

When	looking	to	get	multiple	microservices	collaborating	to	perform	some
overarching	operation,	look	to	explicitly	model	the	process	using	sagas,	a	topic
we	explored	in	Chapter	6.

In	general,	distributed	transactions	should	be	avoided	in	situations	where	you
can	use	a	saga	instead.	Distributed	transactions	add	significant	complexity	to
systems,	have	problematic	failure	modes,	and	often	don’t	deliver	what	you
expect	even	when	they	work.	Sagas	are	in	virtually	all	cases	a	better	fit	for
implementing	business	processes	that	span	multiple	microservices.

There	are	two	different	styles	of	sagas	to	consider:	orchestrated	sagas	and
choreographed	sagas.	Orchestrated	sagas	use	a	centralized	orchestrator	to
coordinate	with	other	microservices	and	ensure	that	things	are	done.	In	general,
this	is	a	simple	and	straightforward	approach,	but	the	central	orchestrator	can
end	up	doing	too	much	if	you	aren’t	careful,	and	it	can	become	a	source	of
contention	when	multiple	teams	are	working	on	the	same	business	process.	With
choreographed	sagas,	there	is	no	central	coordinator;	instead,	the	responsibility
for	the	business	process	is	distributed	into	a	number	of	collaborating
microservices.	This	can	be	a	more	complex	architecture	to	implement,	and	it
requires	more	work	to	ensure	that	the	right	things	are	happening,	but	on	the	flip
side	it	is	much	less	prone	to	coupling	and	works	well	for	multiple	teams.

Personally,	I	love	choreographed	sagas,	but	then	I’ve	used	them	a	lot	and	made	a
lot	of	mistakes	implementing	them.	My	general	advice	is	that	orchestrated	sagas
work	fine	when	a	single	team	owns	responsibility	for	the	whole	process,	but	they
become	more	problematic	with	multiple	teams.	Choreographed	sagas	can	justify
their	increased	complexity	in	situations	in	which	multiple	teams	are	expected	to
collaborate	on	a	process.

Build

Each	microservice	should	have	its	own	build,	its	own	CI	pipeline.	When	I	make
a	change	to	a	microservice,	I	expect	to	be	able	to	build	that	microservice	by
itself.	Avoid	situations	in	which	you	have	to	build	all	your	microservices
together,	as	this	makes	independent	deployability	much	harder.

For	reasons	outlined	in	Chapter	7,	I	am	not	a	fan	of	monorepos.	If	you	really
want	to	use	them,	then	please	understand	the	challenges	they	cause	around	clear
lines	of	ownership	and	potential	complexity	of	builds.	But	definitely	make	sure
that,	whether	you	use	a	monorepo	or	a	multirepo	approach,	each	microservice
has	its	own	CI	build	process	that	can	be	triggered	independently	of	any	other
builds.

Deployment

Microservices	are	normally	deployed	as	a	process.	This	process	can	be	deployed
onto	a	physical	machine,	a	virtual	machine,	a	container,	or	an	FaaS	platform.
Ideally,	we	want	microservices	to	be	as	isolated	from	one	another	as	possible	in	a
deployed	environment.	We	don’t	want	a	situation	in	which	one	microservice
using	up	lots	of	computing	resources	can	impact	a	different	microservice.	In
general,	this	means	we	want	to	have	each	microservice	using	its	own	ring-fenced
operating	system	and	set	of	computing	resources.	Containers	are	especially
effective	at	giving	each	microservice	instance	its	own	ring-fenced	set	of
resources,	making	them	a	great	choice	for	microservice	deployments.

Kubernetes	can	be	very	useful	if	you	are	looking	to	run	container	workloads
across	multiple	machines.	It’s	not	something	I’d	recommend	for	just	a	few
microservices,	as	it	brings	with	it	its	own	sources	of	complexity.	Where	possible,
use	a	managed	Kubernetes	cluster,	as	this	allows	you	to	avoid	some	of	this
complexity.

FaaS	is	an	interesting	emerging	pattern	in	deploying	code.	Rather	than	having	to
specify	how	many	copies	of	something	you	want,	you	just	give	your	code	to	the
FaaS	platform	and	say,	“When	this	happens,	run	this	code.”	This	is	really	nice
from	a	developer	point	of	view,	and	I	think	an	abstraction	like	this	is	likely	the
future	for	a	large	amount	of	server-side	development.	The	current
implementations	aren’t	without	problems,	though.	In	terms	of	microservices,
deploying	a	whole	microservice	as	a	single	“function”	on	a	FaaS	platform	is	a
totally	fine	way	to	start.

One	final	note:	separate	in	your	mind	the	concepts	of	deployment	and	release.
Just	because	you’ve	deployed	something	to	production	doesn’t	mean	it	has	to	be
released	to	your	users.	By	separating	these	concepts,	you	open	up	the

opportunity	to	roll	out	your	software	in	different	ways—for	example,	by	using
canary	releases	or	parallel	runs.	All	of	this	and	more	is	covered	in	depth	in
Chapter	8.

Testing

It	makes	a	lot	of	sense	to	have	a	suite	of	automated	functional	tests	to	give	you
fast	feedback	on	the	quality	of	your	software	before	the	users	see	it,	and	this	is
absolutely	something	you	should	do.	Microservices	give	you	a	lot	of	options	in
terms	of	the	different	types	of	tests	you	can	write,	as	we	explored	in	Chapter	9.

When	compared	to	other	types	of	architectures,	though,	end-to-end	tests	can	be
especially	problematic	for	microservice	architectures.	They	can	end	up	being
more	expensive	to	write	and	maintain	for	microservice	architectures	than	for
simpler	nondistributed	architectures,	and	the	tests	themselves	can	end	up	having
a	lot	more	failures	that	don’t	necessarily	point	to	a	problem	with	your	code.	End-
to-end	tests	that	span	multiple	teams	are	particularly	challenging.

Over	time,	look	to	reduce	your	reliance	on	end-to-end	tests;	consider	replacing
some	of	the	effort	put	into	this	form	of	testing	with	consumer-driven	contracts,
schema	compatibility	checking,	and	testing	in	production.	These	activities	can
deliver	much	more	effectively	than	end-to-end	tests	on	quickly	catching	issues
on	more	distributed	systems.

Monitoring	and	Observability

In	Chapter	10,	I	explained	how	monitoring	is	an	activity,	something	we	do	to	a
system,	but	that	focusing	on	an	activity	rather	than	an	outcome	is	problematic,	a
thread	that	has	run	through	this	book.	Instead,	we	should	focus	on	the
observability	of	our	systems.	Observability	is	the	extent	to	which	we	can
understand	what	a	system	is	doing	by	examining	external	outputs.	Making	a
system	that	has	good	observability	requires	that	we	build	this	thinking	into	our
software	and	ensure	that	the	right	types	of	external	outputs	are	available.

Distributed	systems	can	fail	in	strange	ways,	and	microservices	are	no	different.
We	cannot	predict	all	causes	of	system	failure,	so	it	can	be	hard	to	know	what
information	we’ll	need	ahead	of	time	to	diagnose	and	fix	issues.	Using	tooling

that	can	help	you	interrogate	these	external	outputs	in	ways	that	you	cannot
expect	becomes	increasingly	important.	I	suggest	that	you	look	at	tools	like
Lightstep	and	Honeycomb	that	were	built	with	this	thinking	in	mind.

Finally,	as	your	system	grows	in	scale,	it	becomes	more	and	more	likely	that
there	will	always	be	an	error	somewhere.	But	in	a	large-scale	system,	one
machine	having	a	problem	isn’t	necessarily	cause	for	everyone	to	jump	into
action,	nor	should	this	necessarily	result	in	a	rude	awakening	for	anyone	at	3
a.m.	Using	“test	in	production”	techniques	like	parallel	runs	and	synthetic
transactions	can	be	much	more	effective	for	picking	up	problems	that	might
actually	be	impacting	the	end	users.

Security

Microservices	give	us	more	opportunity	to	defend	our	application	in	depth,
which	in	turn	can	lead	to	more	secure	systems.	On	the	other	hand,	they	often
have	a	larger	attack	surface	area,	which	can	leave	us	more	exposed	to	attack!
This	balancing	act	is	why	it’s	so	important	to	have	a	holistic	understanding	of
security,	something	I	shared	in	Chapter	11.

With	more	information	flowing	over	networks,	it	becomes	more	important	to
consider	the	protection	of	data	in	transit.	The	increased	number	of	moving	parts
also	means	that	automation	is	a	vital	part	of	microservice	security.	Managing
patching,	certificates,	and	secrets	using	manual,	error-prone	processes	can	leave
you	vulnerable	to	attack.	So	use	tools	that	allow	for	ease	of	automation.

JWTs	can	be	used	to	decentralize	authorization	logic	in	a	way	that	also	avoids
the	need	for	additional	round	trips.	This	can	help	protect	you	from	issues	like	the
confused	deputy	problem,	while	at	the	same	time	ensuring	your	microservice	can
run	in	a	more	independent	fashion.

Finally,	increasing	numbers	of	people	are	adopting	a	zero-trust	mindset.	With
zero	trust,	you	operate	as	though	your	system	has	already	been	compromised	and
you	need	to	build	your	microservices	accordingly.	It	may	seem	like	a	paranoid
stance,	but	I’m	increasingly	of	the	opinion	that	embracing	this	principle	can
actually	simplify	how	you	view	the	security	of	your	system.

Resiliency

In	Chapter	12,	we	looked	at	resiliency	as	a	whole,	and	I	shared	with	you	the	four
key	concepts	that	need	to	be	considered	when	thinking	about	resiliency:

Robustness

The	ability	to	absorb	expected	perturbation

Rebound

The	ability	to	recover	after	a	traumatic	event

Graceful	extensibility

How	well	we	deal	with	a	situation	that	is	unexpected

Sustained	adaptability

The	ability	to	continually	adapt	to	changing	environments,	stakeholders,	and
demands

Taken	as	a	whole,	microservice	architectures	can	help	with	some	of	these	things
(namely	robustness	and	rebound),	but	as	we	see	from	this	list,	that	by	itself
doesn’t	make	you	resilient.	Much	of	being	resilient	is	about	team	and
organizational	behavior	and	culture.

Fundamentally,	you	have	to	explicitly	do	things	to	make	your	application	more
robust.	Robustness	isn’t	free—microservices	give	us	the	option	to	improve	the
resiliency	of	our	systems,	but	we	have	to	make	that	choice.	For	example,	we
have	to	understand	that	any	call	we	make	to	another	microservice	might	fail,	that
machines	might	die,	and	that	bad	things	happen	to	good	network	packets.
Stability	patterns	like	bulkheads,	circuit	breakers,	and	properly	configured	time-
outs	can	help	greatly.

Scaling

Microservices	give	us	a	number	of	different	ways	to	scale	an	application.	In
Chapter	13,	I	explore	the	four	axes	of	scaling,	which	I	share	below:

Vertical	scaling

In	a	nutshell,	this	means	getting	a	bigger	machine.

Horizontal	duplication

Having	multiple	things	capable	of	doing	the	same	work.

Data	partitioning

Dividing	work	based	on	some	attribute	of	the	data,	e.g.,	customer	group.

Functional	decomposition

Separation	of	work	based	on	the	type,	e.g.,	microservice	decomposition.

With	scaling,	do	the	easy	stuff	first.	Vertical	scaling	and	horizontal	duplication
are	quick	and	easy	compared	with	the	other	two	axes	presented	here.	If	they
work,	great!	If	not,	you	can	look	at	the	other	mechanisms.	It’s	common	as	well
to	mix	the	different	types	of	scaling—partitioning	your	traffic	based	on
customers,	for	example,	and	then	having	each	partition	scaled	horizontally.

User	Interfaces

All	too	often,	the	user	interface	is	an	afterthought	when	it	comes	to	system
decomposition—we	break	apart	our	microservices	but	leave	a	monolithic	user
interface.	This	in	turn	leads	to	the	problems	of	having	separate	frontend	and
backend	teams.	Instead,	we	want	stream-aligned	teams,	where	one	team	owns	all
the	functionality	associated	with	an	end-to-end	slice	of	user	functionality.	To
make	that	change	happen	and	get	rid	of	siloed	frontend	and	backend	teams,	we
need	to	break	apart	our	user	interfaces.

In	Chapter	14,	I	share	how	we	can	use	micro	frontends	to	deliver	decomposed
user	interfaces	using	single-page	app	frameworks	like	React.	User	interfaces
often	face	problems	in	terms	of	the	number	of	calls	they	need	to	make,	or
because	they	need	to	perform	call	aggregation	and	filtering	to	suit	mobile
devices.	The	backend	for	frontend	(BFF)	pattern	can	help	provide	server-side
aggregation	and	filtering	in	these	situations,	although	if	you	are	able	to	use

GraphQL,	you	may	be	able	to	sidestep	the	use	of	BFFs.

Organization

In	Chapter	15,	we	looked	at	the	shift	away	from	horizontally	aligned,	siloed
teams	toward	team	structures	that	are	organized	around	end-to-end	slices	of
functionality.	These	stream-aligned	teams,	as	the	authors	of	Team	Topologies
describe	them,	are	supported	by	enabling	teams,	as	Figure	E-3	shows.	Enabling
teams	will	often	have	a	specific	cross-cutting	focus,	such	as	focusing	on	security
or	usability,	and	support	the	stream-aligned	teams	in	these	aspects.

Figure	E-3.	Enabling	teams	support	multiple	stream-aligned	teams

Making	these	stream-aligned	teams	as	autonomous	as	possible	means	that	they
need	self-service	tools	to	avoid	having	to	constantly	ask	other	teams	to	do	things
for	them.	As	part	of	this,	a	platform	can	be	incredibly	useful.	It’s	important,
though,	that	we	see	a	platform	as	a	type	of	paved	road—that	is,	as	something
that	makes	it	easy	to	do	the	right	thing,	without	requiring	that	it	must	be	used.
Making	a	platform	optional	ensures	that	making	the	platform	easy	to	use	remains
a	key	focus	of	the	team	owning	it,	while	also	allowing	teams	to	make	a	different
choice	when	warranted.

Architecture

It’s	important	that	we	don’t	see	the	architecture	of	our	system	as	fixed	and
unchanging.	Instead,	we	should	view	our	system	architecture	as	something	that
should	be	able	to	continually	change	as	circumstances	require.	For	you	to	get	the
most	out	of	microservice	architectures,	moving	to	an	organization	where	more
autonomy	is	pushed	into	teams	means	that	responsibility	for	the	technical	vision
needs	to	become	a	more	collaborative	process.	The	architect	sitting	in	an	ivory
tower	will	either	be	a	significant	blocker	to	a	microservice	architecture	or	else
will	become	an	ignored	irrelevance.

The	role	of	shepherding	the	architecture	of	a	system	can	be	entirely	distributed
into	the	teams,	and	at	a	certain	level	of	scale	this	can	work	well.	However,	as	the
organization	grows,	having	people	with	dedicated	time	to	look	across	the	system
as	a	whole	becomes	essential.	Call	them	principal	engineers,	technical	product
owners,	or	architects,	it	doesn’t	really	matter—the	role	that	they	need	to	play	is
the	same.	As	I	showed	in	Chapter	16,	architects	in	a	microservice	organization
need	to	support	teams,	connect	people,	spot	patterns	emerging,	and	spend
enough	time	embedded	with	teams	to	see	how	the	big	picture	stuff	plays	out	in
reality.

Further	Reading

Throughout	this	book,	I	have	referenced	many	papers,	presentations,	and	books
that	I	have	learned	a	great	deal	from,	and	I	have	made	sure	to	list	them	in
Bibliography.	Since	the	first	edition,	though,	the	two	books	that	have	had	the
biggest	impact	on	my	thinking,	and	as	a	result	have	been	referenced	extensively
in	this	new	edition,	are	worth	calling	out	here	as	“must	reads.”	The	first	is
Accelerate	by	Nicole	Forsgren,	Jez	Humble,	and	Gene	Kim.	The	second	is	Team
Topologies	by	Matthew	Skelton	and	Manuel	Pais.	These	two	books	are,	in	my
opinion,	the	two	most	useful	books	on	software	development	written	in	the	last
ten	years,	and	I	consider	them	essential	reading	whether	you	are	into
microservices	or	not.

As	a	companion	to	this	book,	my	own	Monolith	to	Microservices	goes	into	more
depth	on	how	to	break	apart	existing	system	architectures.

Looking	Forward

In	the	future,	I	suspect	the	technology	that	makes	microservices	easier	to	build
and	run	will	continue	to	improve,	and	I	am	especially	keen	to	see	what	the
second-	(and	third-)	generation	FaaS	products	look	like.	Whether	or	not	FaaS
takes	off,	Kubernetes	will	become	even	more	widespread,	even	if	it	will
increasingly	be	hidden	behind	more	developer-friendly	abstraction	layers.
Kubernetes	has	won,	but	in	a	way	that	I	think	most	application	developers
shouldn’t	have	to	worry	about.	I	remain	very	interested	in	seeing	how	Wasm
changes	how	we	think	about	deployments,	and	I	still	have	a	suspicion	that
unikernels	may	have	a	second	coming	as	well.

Since	this	book’s	first	edition,	microservices	have	well	and	truly	gone
mainstream	in	a	way	that	has	surprised	me,	and	that	has	concerned	me	too.	It
seems	that	a	lot	of	people	adopting	microservices	are	doing	so	more	because
everyone	else	is	doing	it,	rather	than	microservices	being	right	for	them.	As
such,	I	fully	expect	us	to	hear	more	horror	stories	about	failed	microservice
implementations,	which	I	will	digest	with	relish	to	see	what	can	be	learned.	I
also	fully	expect	a	wider	industry	backlash	against	microservices	at	some	point
when	the	microservice	disaster	case	studies	reach	critical	mass.	Applying	critical
thinking	to	work	out	what	approach	makes	the	most	sense	in	any	given	situation
isn’t	very	sexy	or	marketable,	and	I	don’t	expect	that	will	change	in	a	world
where	selling	technology	is	more	profitable	than	selling	ideas.

I	don’t	mean	to	sound	pessimistic!	We	are,	as	an	industry,	still	very	young,	and
we	are	still	finding	our	place	in	the	world.	The	amount	of	energy	and	ingenuity
that	gets	put	into	software	development	continues	to	keep	me	interested,	and	I
can’t	wait	to	see	what	the	next	decade	brings.

Final	Words

Microservice	architectures	give	you	more	options,	and	more	decisions	to	make.
Making	decisions	in	this	world	is	a	far	more	common	activity	than	in	simpler,
monolithic	systems.	You	won’t	get	all	of	these	decisions	right,	I	can	guarantee
that.	So,	knowing	you	are	going	to	get	some	things	wrong,	what	are	your
options?	Well,	I	would	suggest	finding	ways	to	make	each	decision	small	in
scope;	that	way,	if	you	get	one	wrong,	you	impact	only	a	small	part	of	your

system.	Learn	to	embrace	the	concept	of	evolutionary	architecture,	in	which
your	system	bends	and	flexes	and	changes	over	time	as	you	learn	new	things.
Think	not	of	big-bang	rewrites,	but	instead	of	a	series	of	changes	made	to	your
system	over	time	to	keep	it	supple.

I	hope	by	now	I’ve	shared	with	you	enough	information	and	experiences	to	help
you	decide	whether	microservices	are	for	you.	If	they	are,	I	hope	you	think	of
this	as	a	journey,	not	a	destination.	Go	incrementally.	Break	your	system	apart
piece	by	piece,	learning	as	you	go.	And	get	used	to	it:	in	many	ways,	the
discipline	to	continually	change	and	evolve	our	systems	is	a	far	more	important
lesson	to	learn	than	any	other	I	have	shared	with	you	through	this	book.	Change
is	inevitable.	Embrace	it.

Bibliography

2020	Data	Breach	Investigations	Report.	Verizon,	2020.	https://oreil.ly/ps0Cx.

Abbott,	Martin	L.,	and	Michael	T.	Fisher.	The	Art	of	Scalability:	Scalable	Web
Architecture,	Processes,	and	Organizations	for	the	Modern	Enterprise.	2nd	ed.
Boston:	Addison-Wesley,	2015.

Allspaw,	John.	“Blameless	Post-Mortems	and	a	Just	Culture.”	Code	as	Craft
(blog).	Etsy,	May	22,	2012.	https://oreil.ly/P1BcX.

Bache,	Emily.	“End-to-End	Automated	Testing	in	a	Microservice	Architecture.”
NDC	Conferences.	July	5,	2017.	YouTube	video,	56:48.	https://oreil.ly/DbFdR.

Bell,	Laura,	Michael	Brunton-Spall,	Rich	Smith,	and	Jim	Bird.	Agile	Application
Security.	Sebastopol:	O’Reilly,	2017.

Beyer,	Betsy,	Chris	Jones,	Jennifer	Petoff,	and	Niall	Richard	Murphy,	eds.	Site
Reliability	Engineering:	How	Google	Runs	Production	Systems.	Sebastopol:
O’Reilly,	2016.

Beyer,	Betsy,	Niall	Richard	Murphy,	David	K.	Rensin,	Kent	Kawahara,	and
Stephen	Thorne,	eds.	The	Site	Reliability	Workbook:	Practical	Ways	to
Implement	SRE.	Sebastopol:	O’Reilly,	2018.

Bird,	Christian,	Nachi	Nagappan,	Brendan	Murphy,	Harald	Gall,	and	Premkumar
Devanbu.	“Don’t	Touch	My	Code!	Examining	the	Effects	of	Ownership	on
Software	Quality.”	In	ESEC/FSE	’11:	Proceedings	of	the	19th	ACM	SIGSOFT
Symposium	and	the	13th	European	Conference	on	Foundations	of	Software
Engineering,	4–14.	New	York:	ACM,	2011.	doi.org/10.1145/2025113.2025119.

Brandolini,	Alberto.	EventStorming.	Victoria,	BC:	Leanpub,	forthcoming.

Brooks,	Frederick	P.,	Jr.	The	Mythical	Man-Month:	Essays	on	Software
Engineering,	Anniversary	ed.	Boston:	Addison-Wesley,	1995.

Brown,	Alanna,	Nicole	Forsgren,	Jez	Humble,	Nigel	Kersten,	and	Gene	Kim.
2016	State	of	DevOps	Report.	https://oreil.ly/WJjhA.

Bryant,	Daniel.	“Apple	Rebuilds	Siri	Backend	Services	Using	Apache	Mesos.”
InfoQ,	May	3,	2015.	https://oreil.ly/NsjEQ.

Burns,	Brendan,	Brian	Grant,	David	Oppenheimer,	Eric	Brewer,	and	John

Wilkes.	“Borg,	Omega,	and	Kubernetes.”	acmqueue	14,	no.	1	(2016).
https://oreil.ly/2TlYG.

Calçado,	Phil.	“Pattern:	Using	Pseudo-URIs	with	Microservices.”	May	22,	2017.
https://oreil.ly/uZuto.

Cockburn,	Alistair.	“Hexagonal	Architecture.”	alistair.cockburn.us,	January	4,
2005.	https://oreil.ly/0JeIm.

Cohn,	Mike.	Succeeding	with	Agile.	Upper	Saddle	River,	NJ:	Addison-Wesley,
2009.

Colyer,	Adrian.	“Information	Distribution	Aspects	of	Design	Methodology.”	The
Morning	Paper	(blog),	October	17,	2016.	https://oreil.ly/qxj2m.

Crispin,	Lisa,	and	Janet	Gregory.	Agile	Testing:	A	Practical	Guide	for	Testers
and	Agile	Teams.	Upper	Saddle	River,	NJ:	Addison-Wesley,	2008.

Evans,	Eric.	Domain-Driven	Design:	Tackling	Complexity	in	the	Heart	of
Software.	Boston:	Addison-Wesley,	2004.

Ford,	Neal,	Rebecca	Parsons,	and	Patrick	Kua.	Building	Evolutionary
Architectures.	Sebastopol:	O’Reilly,	2017.

Forsgren,	Nicole,	Dustin	Smith,	Jez	Humble,	and	Jessie	Frazelle.	Accelerate:
State	of	DevOps	Report	2019.	https://oreil.ly/A3zGn.

Forsgren,	Nicole,	Jez	Humble,	and	Gene	Kim.	Accelerate:	The	Science	of
Building	and	Scaling	High	Performing	Technology	Organizations.	Portland,	OR:
IT	Revolution,	2018.

Fowler,	Martin.	“CodeOwnership.”	martinfowler.com,	May	12,	2006.
https://oreil.ly/a42c7.

Fowler,	Martin.	“Eradicating	Non-Determinism	in	Tests.”	martinfowler.com,
April	14,	2011.	https://oreil.ly/sqPOD.

Fowler,	Martin.	“StranglerFigApplication.”	martinfowler.com,	June	29,	2004.
https://oreil.ly/foti0.

Freeman,	Steve,	and	Nat	Pryce.	Growing	Object-Oriented	Software,	Guided	by
Tests.	Upper	Saddle	River,	NJ:	Addison-Wesley,	2009.

Friedrichsen,	Uwe.	“The	Limits	of	the	Saga	Pattern.”	ufried.com	(blog).

February	19,	2021.	https://oreil.ly/X1BfK.

Garcia-Molina,	Hector,	Dieter	Gawlick,	Johannes	Klein,	and	Karl	Kleissner.
“Modeling	Long-Running	Activities	as	Nested	Sagas.”	Data	Engineering	14,	no.
1	(March	1991):	14–18.	https://oreil.ly/RVp7A1.

Garcia-Molina,	Hector,	and	Kenneth	Salem.	“Sagas.”	ACM	Sigmod	Record	16,
no.	3	(1987):	249–59.

Governor,	James.	“Towards	Progressive	Delivery.”	James	Governor’s
MonkChips	(blog).	RedMonk,	August	6,	2018.	https://oreil.ly/OlkEY.

Heinemeier	Hansson,	David.	“The	Majestic	Monolith.”	Signal	v.	Noise,
February	29,	2016.	https://oreil.ly/fN5CR.

Hodgson,	Pete.	“Feature	Toggles	(aka	Feature	Flags).”	martinfowler.com,
October	9,	2017.	https://oreil.ly/pSPrd.

Hohpe,	Gregor.	The	Software	Architect	Elevator:	Redefining	the	Architect’s	Role
in	the	Digital	Enterprise.	Sebastopol:	O’Reilly,	2020.

Hohpe,	Gregor,	and	Bobby	Woolf.	Enterprise	Integration	Patterns.	Boston:
Addison-Wesley,	2003.

Humble,	Jez,	and	David	Farley.	Continuous	Delivery:	Reliable	Software
Releases	Through	Build,	Test,	and	Deployment	Automation.	Upper	Saddle	River,
NJ:	Addison-Wesley,	2010.

Hunt,	Troy.	“Passwords	Evolved:	Authentication	Guidance	for	the	Modern	Era.”
troyhunt.com,	July	26,	2017.	https://oreil.ly/r4ava.

Ingles,	Paul.	“Convergence	to	Kubernetes.”	Medium,	June	18,	2018.
https://oreil.ly/oB2FI.

Ishmael,	Johnathan.	“Optimising	Serverless	for	BBC	Online.”	Technology	and
Creativity	at	the	BBC	(blog),	BBC,	January	26,	2021.	https://oreil.ly/mPp2L.

Jackson,	Cam.	“Micro	Frontends.”	martinfowler.com,	June	19,	2019.
https://oreil.ly/nYu15.

Kingsbury,	Kyle.	“Jepsen:	Elasticsearch.”	Aphyr,	June	15,	2014.
https://oreil.ly/6l2sR.

Kingsbury,	Kyle.	“Jepsen:	Elasticsearch	1.5.0.”	Aphyr,	April	27,	2015.

https://oreil.ly/jlu8p.

Kleppmann,	Martin.	Designing	Data-Intensive	Applications.	Sebastopol:
O’Reilly,	2017.

Krishnan,	Kripa.	“Weathering	the	Unexpected.”	acmqueue	10,	no.	9	(2012).
https://oreil.ly/BN2Ek.

Kubis,	Robert.	“Google	Cloud	Spanner:	Global	Consistency	at	Scale	by	Robert
Kubis.”	Devoxx.	November	7,	2017.	YouTube	video,	33:22.
https://oreil.ly/fwbMD.

Lamport,	Leslie.	“Time,	Clocks,	and	the	Ordering	of	Events	in	a	Distributed
System.”	Communications	of	the	ACM.	21,	no.	7	(July	1978):	558–65.
https://oreil.ly/Y07gU.

Lewis,	James.	“Scale,	Microservices	and	Flow.”	YOW!	Conferences.	February
10,	2020.	YouTube	video,	51:03.	https://oreil.ly/nzXqX.

Losio,	Renato.	“Elastic	Changes	Licences	for	Elasticsearch	and	Kibana:	AWS
Forks	Both.”	InfoQ,	January	25,	2021.	https://oreil.ly/PClFv.

MacCormack,	Alan,	Carliss	Y.	Baldwin,	and	John	Rusnak.	“Exploring	the
Duality	Between	Product	and	Organizational	Architectures:	A	Test	of	the
Mirroring	Hypothesis.”	Research	Policy	41,	no.	8	(October	2012):	1309–24.

Majors,	Charity.	“Metrics:	Not	the	Observability	Droids	You’re	Looking	For.”
Honeycomb	(blog),	October	24,	2017.	https://oreil.ly/RpZaZ.

Majors,	Charity,	Liz	Fong-Jones,	and	George	Miranda.	Observability
Engineering.	Sebastopol:	O’Reilly,	2022.

McAllister,	Neil.	“Code	Spaces	Goes	Titsup	FOREVER	After	Attacker	NUKES
Its	Amazon-Hosted	Data.”	The	Register,	June	18,	2014.	https://oreil.ly/IUOD0.

Miles,	Russ.	Learning	Chaos	Engineering.	Sebastopol:	O’Reilly,	2019.

Moore,	Jon.	“Architecture	with	800	of	My	Closest	Friends:	The	Evolution	of
Comcast’s	Architecture	Guild.”	InfoQ,	May	14,	2019.	https://oreil.ly/dVfhi.

Morris,	Kief.	Infrastructure	as	Code.	2nd	ed.	Sebastopol:	O’Reilly,	2016.

Nagappan,	Nachiappan,	Brendan	Murphy,	and	Victor	Basili.	“The	Influence	of
Organizational	Structure	on	Software	Quality:	An	Empirical	Case	Study.”	ICSE

’08:	Proceedings	of	the	30th	International	Conference	on	Software	Engineering.
New	York:	ACM,	2008.

Newman,	Sam.	Monolith	to	Microservices.	Sebastopol:	O’Reilly,	2019.

Noursalehi,	Saeed.	“Git	Virtual	File	System	Design	History.”
https://t.co/mIQR4uzWKS?amp=1.

Nygard,	Michael.	Release	It!	2nd	ed.	Raleigh:	Pragmatic	Bookshelf,	2018.

Oberlehner,	Markus.	“Monorepos	in	the	Wild.”	Medium,	June	12,	2017.
https://oreil.ly/Sk6am.

Padmanabhan,	Senthil,	and	Pranav	Jha.	“WebAssembly	at	eBay:	A	Real-World
Use	Case.”	eBay,	May	22,	2019.	https://oreil.ly/rlr7d.

Page-Jones,	Meilir.	Practical	Guide	to	Structured	Systems	Design,	2nd	ed.	New
York:	Yourdon	Press,	1980.

Palino,	Todd,	Neha	Narkhede,	and	Gwen	Shapira.	Kafka:	The	Definitive	Guide.
Sebastopol:	O’Reilly,	2017.

Parnas,	David.	“Information	Distribution	Aspects	of	Design	Methodology.”	In
Information	Processing:	Proceedings	of	the	IFIP	Congress,	339–44.	Vol.	1.
Amsterdam:	North	Holland,	1972.

Parnas,	David.	“On	the	Criteria	to	Be	Used	in	Decomposing	Systems	into
Modules.”	Journal	contribution,	Carnegie	Mellon	University,	1971.
https://oreil.ly/nWtQA.

Plotnicki,	Lukasz.	“BFF	@	Soundcloud.”	ThoughtWorks,	December	9,	2015.
https://oreil.ly/ZyR0l.

Potvin,	Rachel,	and	Josh	Levenberg.	“Why	Google	Stores	Billions	of	Lines	of
Code	in	a	Single	Repository.”	Communications	of	the	ACM	59,	no.	7	(July
2016):	78–87.	https://oreil.ly/Eupyi.

Pyhäjärvi,	Maaret.	Ensemble	Programming	Guidebook.	Self-published,	2015–
2020.	https://ensembleprogramming.xyz.

Riggins,	Jennifer.	“The	Rise	of	Progressive	Delivery	for	Systems	Resilience.”
The	New	Stack,	April	1,	2019.	https://oreil.ly/merIs.

Rodriguez,	Daniel,	M.	Ángel	Sicilia,	Elena	García	Barriocanal,	and	Rachel

Harrison.	“Empirical	Findings	on	Team	Size	and	Productivity	in	Software
Development.”	Journal	of	Systems	and	Software	85,	no.	3	(2012).
doi.org/10.1016/j.jss.2011.09.009.

Rossman,	John.	Think	Like	Amazon:	50	1/2	Ideas	to	Become	a	Digital	Leader.
New	York:	McGraw-Hill,	2019.

Ruecker,	Bernd.	Practical	Process	Automation.	Sebastopol:	O’Reilly,	2021.

Sadalage,	Pramod,	and	Martin	Fowler.	NoSQL	Distilled:	A	Brief	Guide	to	the
Emerging	World	of	Polyglot	Persistence.	Upper	Saddle	River,	NJ:	Addison-
Wesley,	2012.

Schneider,	Jonny.	Understanding	Design	Thinking,	Lean,	and	Agile.	Sebastopol:
O’Reilly,	2017.

Shankland,	Stephen.	“Google	Uncloaks	Once-Secret	Server.”	CNET,	December
11,	2009.	https://oreil.ly/hHKvE.

Shorrock,	Steven.	“Alarm	Design:	From	Nuclear	Power	to	WebOps.”
Humanistic	Systems	(blog),	October	16,	2015.	https://oreil.ly/AiJ5i.

Shostack,	Adam.	Threat	Modeling:	Designing	for	Security.	Indianapolis:	Wiley,
2014.

Sigelman,	Ben.	“Three	Pillars	with	Zero	Answers—Towards	a	New	Scorecard
for	Observability.”	Lightstep	(blog	post),	December	5,	2018.
https://oreil.ly/qdtSS.

Skelton,	Matthew,	and	Manuel	Pais.	Team	Topologies.	Portland,	OR:	IT
Revolution,	2019.

Steen,	Maarten	van,	and	Andrew	Tanenbaum.	Distributed	Systems.	3rd	ed.	Scotts
Valley,	CA:	CreateSpace	Independent	Publishing	Platform,	2017.

Stopford,	Ben.	Designing	Event-Driven	Systems.	Sebastopol:	O’Reilly,	2017.

Valentino,	Jason	D.	“Moving	One	of	Capital	One’s	Largest	Customer-Facing
Apps	to	AWS.”	Medium/Capital	One	Tech,	May	24,	2017.	https://oreil.ly/IEIC3.

Vaughan,	Diane.	The	Challenger	Launch	Decision:	Risky	Technology,	Culture,
and	Deviance	at	NASA.	Chicago:	University	of	Chicago	Press,	1996.

Vernon,	Vaughn.	Domain-Driven	Design	Distilled.	Boston:	Addison-Wesley,

2016.

Vernon,	Vaughn.	Implementing	Domain-Driven	Design.	Upper	Saddle	River,	NJ:
Addison-Wesley,	2013.

Vocke,	Ham.	“The	Practical	Test	Pyramid.”	martinfowler.com,	February	26,
2018.	https://oreil.ly/6rRoU.

Webber,	Emily.	Building	Successful	Communities	of	Practice.	San	Francisco:
Blurb,	2016.

Webber,	Jim,	Savas	Parastatidis,	and	Ian	Robinson.	REST	in	Practice:
Hypermedia	and	Systems	Architecture.	Sebastopol:	O’Reilly,	2010.

Woods,	David	D.	“Four	Concepts	for	Resilience	and	the	Implications	for	the
Future	of	Resilience	Engineering.”	Reliability	Engineering	&	System	Safety	141
(September	2015):	5–9.	doi.org/10.1016/j.ress.2015.03.018.

Yourdon,	Edward,	and	Larry	L.	Constantine.	Structured	Design.	New	York:
Yourdon	Press,	1976.

Zimman,	Adam.	“Progressive	Delivery,	a	History…Condensed.”	Industry
Insights	(blog).	LaunchDarkly,	August	6,	2018.	https://oreil.ly/4pVY7.
