(this.webpackJsonpdocs=this.webpackJsonpdocs||[]).push([[0],{79:function(e,a,t){e.exports=t(90)},90:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),i=t.n(r),o=t(135),c=t(133),m=t(134),s=t(33),u=t(9),p=t(70),d=t(52),E=t(117),g=t(118),b=t(119),h=t(120),v=t(27),f=t(138),z=t(136),y=t(116),k=t(137),w=t(121),S=t(68),P=t.n(S),j=t(49),_=t.n(j),O=t(111),C=t(114),A=t(115),B=t(67),D=t.n(B),L=t(113),T=t(139),I=t(34),R=t.n(I),F=t(35),N=t.n(F);function U(e){var a=e.handleClose,t=function(e){window.open(e,"_blank"),a()};return l.a.createElement(O.a,{component:"nav","aria-labelledby":"pacchetti-lista",subheader:l.a.createElement(L.a,{component:"div",id:"pacchetti-lista"},"Pacchetti e Sorgente")},l.a.createElement(T.a,{button:!0,onClick:function(){return t("https://github.com/dcdeiv/minigest")}},l.a.createElement(C.a,null,l.a.createElement(_.a,null)),l.a.createElement(A.a,null,"Github")),l.a.createElement(T.a,{button:!0,onClick:function(){return t("https://pypi.org/project/minigest/")}},l.a.createElement(C.a,null,l.a.createElement(R.a,null)),l.a.createElement(A.a,null,"PyPi Package")),l.a.createElement(T.a,{button:!0,onClick:function(){return t("https://hub.docker.com/r/dcdeiv/minigest")}},l.a.createElement(C.a,null,l.a.createElement(N.a,null)),l.a.createElement(A.a,null,"Docker Image")))}function q(e){var a=e.handleClose;return l.a.createElement(O.a,{component:"nav","aria-labelledby":"installazione-lista",subheader:l.a.createElement(L.a,{component:"div",id:"installazione-lista"},"Installazione")},l.a.createElement(Q,{to:"/installazione/pypi",handleClose:a},l.a.createElement(C.a,null,l.a.createElement(R.a,null)),l.a.createElement(A.a,null,"PyPi")),l.a.createElement(Q,{to:"/installazione/docker",handleClose:a},l.a.createElement(C.a,null,l.a.createElement(N.a,null)),l.a.createElement(A.a,null,"Docker")))}var x=function(e){var a=e.handleClose;return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,null,l.a.createElement(Q,{to:"/",handleClose:a},l.a.createElement(C.a,null,l.a.createElement(D.a,null)),l.a.createElement(A.a,null,"Home"))),l.a.createElement(y.a,null),l.a.createElement(U,{handleClose:a}),l.a.createElement(y.a,null),l.a.createElement(q,{handleClose:a}),l.a.createElement(y.a,null))},M=Object(E.a)((function(e){return{root:{display:"flex"},drawer:Object(d.a)({},e.breakpoints.up("md"),{width:250,flexShrink:0}),appBar:Object(d.a)({},e.breakpoints.up("md"),{width:"calc(100% - ".concat(250,"px)"),marginLeft:250}),menuButton:Object(d.a)({marginRight:e.spacing(2)},e.breakpoints.up("md"),{display:"none"}),title:{flexGrow:1},toolbar:e.mixins.toolbar,drawerPaper:{width:250},content:{flexGrow:1,maxWidth:"100%"}}})),W=function(){return l.a.createElement(g.a,{color:"inherit",edge:"end",onClick:function(){return window.open("https://github.com/dcdeiv/minigest","_blank")}},l.a.createElement(_.a,null))};function G(e){var a=e.window,t=e.children,n=e.title,r=void 0===n?"minigest":n,i=M(),o=l.a.useState(!1),c=Object(p.a)(o,2),m=c[0],s=c[1],u=void 0!==a?function(){return a().document.body}:void 0,d=function(){s(!m)};return l.a.createElement("div",{className:i.root},l.a.createElement(b.a,{position:"fixed",className:i.appBar},l.a.createElement(h.a,null,l.a.createElement(g.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:d,className:i.menuButton},l.a.createElement(P.a,null)),l.a.createElement(v.a,{variant:"h6",className:i.title},r),l.a.createElement(W,null))),l.a.createElement("nav",{className:i.drawer},l.a.createElement(f.a,{mdUp:!0,implementation:"css"},l.a.createElement(z.a,{container:u,variant:"temporary",anchor:"left",open:m,onClose:d,classes:{paper:i.drawerPaper},ModalProps:{keepMounted:!0}},l.a.createElement(x,{handleClose:function(){return s(!1)}}))),l.a.createElement(f.a,{smDown:!0,implementation:"css"},l.a.createElement(z.a,{classes:{paper:i.drawerPaper},variant:"permanent",open:!0},l.a.createElement(y.a,null),l.a.createElement(x,{handleClose:function(){return!0}})))),l.a.createElement("main",{className:i.content},l.a.createElement("div",{className:i.toolbar}),l.a.createElement(k.a,{mt:2},l.a.createElement(w.a,{maxWidth:"md"},t))))}var H=l.a.forwardRef((function(e,a){return l.a.createElement(s.b,Object.assign({innerRef:a},e))})),K=t(26);function J(e){var a=e.children,t=e.mb,n=void 0===t?6:t,r=Object(K.a)(e,["children","mb"]);return l.a.createElement(k.a,Object.assign({mb:n},r),a,l.a.createElement(k.a,{mt:2},l.a.createElement(y.a,null)))}var X=t(73),Y=Object(E.a)((function(e){return{root:{fontFamily:"'Fira Mono', monospace"},content:{borderLeftStyle:"solid",borderLeftWidth:3,borderLeftColor:e.palette.secondary.main,overflowX:"auto"},typography:{whiteSpace:"pre-wrap",fontFamily:"inherit",fontSize:14}}}));function Z(e){var a=e.mt,t=void 0===a?4:a,n=e.mb,r=void 0===n?4:n,i=e.caption,o=e.children,c=Object(K.a)(e,["mt","mb","caption","children"]),m=Y();return l.a.createElement(k.a,Object.assign({mt:t,mb:r,className:m.root},c),i&&l.a.createElement(k.a,{pl:2},l.a.createElement(v.a,{variant:"overline"},i)),l.a.createElement(X.a,{square:!0},l.a.createElement(k.a,{p:2,className:m.content},l.a.createElement(v.a,{className:m.typography},o))))}var Q=function(e){var a=e.handleClose,t=Object(K.a)(e,["handleClose"]);return l.a.createElement("span",{onClick:a},l.a.createElement(T.a,Object.assign({button:!0,component:H},t)))};function V(e){var a=e.children,t=(e.mb,Object(K.a)(e,["children","mb"]));return l.a.createElement(k.a,Object.assign({mb:4},t),a)}function $(e){var a=e.children,t=e.mb,n=void 0===t?2:t,r=Object(K.a)(e,["children","mb"]);return l.a.createElement(k.a,Object.assign({mb:n},r),a)}var ee=t(122),ae=t(123),te=t(124),ne=t(125),le=t(126);function re(e){var a=Object(u.f)();return l.a.createElement(l.a.Fragment,null,l.a.createElement(J,null,l.a.createElement(v.a,{variant:"h1",gutterBottom:!0},"minigest"),l.a.createElement(v.a,{gutterBottom:!0},"Minigest \xe8 un'applicazione scritta in python per il framework django, completamente gratuita e distribuita con la licenza MIT."),l.a.createElement(v.a,null,"\xc8 rivolta a tutte le piccole aziende che hanno bisogno di un programma che permetta loro di visualizzare immediamente la loro situazione contabile, di tenere traccia dei pagamenti, degli acquisti, delle vendite e delle tasse e imposte da pagare.")),l.a.createElement(k.a,{mb:3},l.a.createElement(ee.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",spacing:2},l.a.createElement(ee.a,{item:!0,xs:12,sm:6},l.a.createElement(ae.a,null,l.a.createElement(te.a,{avatar:l.a.createElement(R.a,null),title:"PyPi",subheader:"guida all'installazione di minigest attraverso PyPi"}),l.a.createElement(ne.a,null,l.a.createElement(le.a,{variant:"contained",color:"primary",onClick:function(){return a.push("/installazione/pypi")}},"continua")))),l.a.createElement(ee.a,{item:!0,xs:12,sm:6},l.a.createElement(ae.a,null,l.a.createElement(te.a,{avatar:l.a.createElement(N.a,null),title:"Docker",subheader:"guida all'installazione di minigest attraverso Docker"}),l.a.createElement(ne.a,null,l.a.createElement(le.a,{variant:"contained",color:"primary",onClick:function(){return a.push("/installazione/docker")}},"continua")))))),l.a.createElement(y.a,null))}var ie=t(127);function oe(e){return l.a.createElement(V,null,l.a.createElement($,null,l.a.createElement(v.a,{variant:"h4"},"Introduzione")),l.a.createElement(v.a,{gutterBottom:!0},"L'immagine docker di ",l.a.createElement("b",null,"minigest")," contiente tutto, anche il progetto django, e pu\xf2 essere utilizzata senza perdere tempo in configurazioni!"),l.a.createElement(v.a,null,"Se preferisci avere il controllo sul tuo progetto, magari per aggiungere funzionalit\xe0, dovresti scaricare e installare ",l.a.createElement("b",null,"minigest")," tramite il pacchetto pypi. Leggi le istruzioni nella"," ",l.a.createElement(ie.a,{to:"/istruzioni/pypi",component:H,color:"secondary"},"sezione dedicata"),"."))}function ce(e){return l.a.createElement(V,null,l.a.createElement($,null,l.a.createElement(v.a,{variant:"h4"},"Tags")),l.a.createElement(v.a,{gutterBottom:!0},"Per scaricare l'immagine docker di minigest sar\xe0 necessario scegliere un tag disponibile tra la"," ",l.a.createElement(ie.a,{href:"https://hub.docker.com/r/dcdeiv/minigest/tags",target:"_blank",rel:"noopener noreferrer",color:"secondary"},"lista dei tag pubblicati"),"."),l.a.createElement(v.a,null,"Il tag ",l.a.createElement("code",null,"latest")," scaricher\xe0 l'ultimo tag pubblicato!"))}var me=t(128),se=t(129),ue=t(130),pe=t(131),de=t(132),Ee={DEBUG:{def:"True",desc:"Attiva tutti i messaggi di errore. Impostare False per un ambiente di produzione"},PRODUCTION:{def:"False",desc:"Definisce l'ambiente di produzione"},SECRET_KEY:{def:"random string",desc:"Chiave segreta django (da cambiare)"},DB_DEFAULT_NAME:{def:"test",desc:"Nome del database"},DB_DEFAULT_USER:{def:"test",desc:"Nome dell'utente postgres a cui \xe8 stato garantito l'accesso al database"},DB_DEFAULT_PW:{def:"test",desc:"La password dell'utente postgres"},DB_DEFAULT_HOST:{def:"localhost",desc:"L'host in cui risiede il database"},DB_DEFAULT_PORT:{def:5432,desc:"La porta del database"}};function ge(e){return l.a.createElement(V,null,l.a.createElement($,null,l.a.createElement(v.a,{variant:"h4"},"Environment"),l.a.createElement(v.a,{variant:"subtitle1"},"Lista delle variabili ambientali disponibili")),l.a.createElement(X.a,null,l.a.createElement(k.a,{style:{overflowX:"auto"}},l.a.createElement(me.a,{style:{whiteSpace:"nowrap"}},l.a.createElement(se.a,null,l.a.createElement(ue.a,null,l.a.createElement(pe.a,null,"Nome"),l.a.createElement(pe.a,null,"Default"),l.a.createElement(pe.a,null,"Descrizione"))),l.a.createElement(de.a,null,Object.keys(Ee).map((function(e,a){var t=Ee[e].def,n=Ee[e].desc,r=Object.keys(Ee).length===a+1?{borderBottom:0}:{};return l.a.createElement(ue.a,{key:a},l.a.createElement(pe.a,{variant:"head",style:r},e),l.a.createElement(pe.a,{style:r},t),l.a.createElement(pe.a,{style:r},n))})))))))}function be(e){return l.a.createElement(V,null,l.a.createElement($,null,l.a.createElement(v.a,{variant:"h4",gutterBottom:!0},"Compose"),l.a.createElement(v.a,{variant:"subtitle1"},"Esempio di installazione tramite ",l.a.createElement("code",null,"docker-compose.yml"))),l.a.createElement(v.a,null,"Il modo pi\xf9 semplice e sicuro per poter utilizzare l'immagine docker di minigest \xe8 attraverso ",l.a.createElement("b",null,"docker-compose"),". Crea il tuo file"," ",l.a.createElement("code",null,"docker-compose.yml")," dove vuoi e scarica l'immagine da compose stesso!"),l.a.createElement(Z,{caption:"docker-compose.yml",mt:2},'version: "3.8"\n\nservices:\n  app:\n    image: dcdeiv/minigest:latest\n    ports:\n      - 8000:8000\n    depends_on:\n      - db\n    command: python manage.py runserver 0.0.0.0:8000\n    volumes:\n      - public:/var/www/minigest/public\n    environment:\n      - DB_DEFAULT_HOST=db\n\n  db:\n    image: postgres:12-alpine\n    volumes:\n      - postgres_data:/var/lib/postgresql/data/\n    environment:\n      - POSTGRES_USER=test\n      - POSTGRES_PASSWORD=test\n      - POSTGRES_DB=test\n\nvolumes:\n  public:\n  postgres_data:'),l.a.createElement(V,null,l.a.createElement(v.a,null,"Comporre il container dalla cartella in cui avete salvato il vostro"," ",l.a.createElement("code",null,"docker-compose.yml"),"."),l.a.createElement(Z,{caption:"shell",mt:2},"docker-compose build")),l.a.createElement(V,null,l.a.createElement(v.a,null,"Eseguire le migrazioni"),l.a.createElement(Z,{caption:"shell",mt:2},"docker-compose exec app python manage.py migrate")),l.a.createElement(V,null,l.a.createElement(v.a,null,"Creare il superuser"),l.a.createElement(Z,{caption:"shell",mt:2},"docker-compose exec app python manage.py createsuperuser")),l.a.createElement(V,null,l.a.createElement(v.a,null,"Testare il container"),l.a.createElement(Z,{caption:"shell",mt:2},"docker-compose up")),l.a.createElement(V,null,l.a.createElement(v.a,null,"Se dal terminale non compaiono errori, si pu\xf2 far partire il container in background e iniziare ad usare minigest!"),l.a.createElement(Z,{caption:"shell",mt:2},"docker-compose up -d")))}function he(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(J,null,l.a.createElement(v.a,{variant:"overline"},"Installazione"),l.a.createElement(v.a,{variant:"h3"},"Docker"),l.a.createElement(k.a,{mt:4},l.a.createElement(k.a,{mb:4},l.a.createElement(y.a,null)),l.a.createElement(Z,null,"docker pull dcdeiv/minigest:latest"))),l.a.createElement(oe,{id:"installazione-docker-introduzione"}),l.a.createElement(ce,{id:"installazione-docker-tags"}),l.a.createElement(ge,{id:"installazione-docker-environment"}),l.a.createElement(be,{id:"installazione-docker-compose"}))}function ve(e){return l.a.createElement(V,null,l.a.createElement($,null,l.a.createElement(v.a,{variant:"h4"},"Introduzione")),l.a.createElement(v.a,{gutterBottom:!0},"Il pacchetto non contiene tutto il progetto django ma solo la collezione delle applicazioni django che possono essere installate a seconda di come deve essere il vostro progetto!"),l.a.createElement(v.a,{gutterBottom:!0},"Un esempio di come pu\xf2 essere utilizzato ",l.a.createElement("b",null,"minigest")," lo potete trovare nella cartella"," ",l.a.createElement(ie.a,{href:"https://github.com/dcdeiv/minigest/tree/master/webapp",target:"_blank",rel:"noopener noreferrer",color:"secondary"},"webapp"),"."),l.a.createElement(V,{mb:0,mt:4},l.a.createElement(v.a,null,l.a.createElement("b",null,"ATTENZIONE!")," \xc8 importante sapere che minigest sovrascrive il modello django ",l.a.createElement("em",null,"User"),", quindi va installato prima di eseguire la primissima migrazione dei modelli!")))}function fe(e){return l.a.createElement(V,null,l.a.createElement($,null,l.a.createElement(v.a,{variant:"h4",gutterBottom:!0},"Dipendenze"),l.a.createElement(v.a,{variant:"subtitle1"},"Prima di procedere \xe8 necessario installare tutte le dipendenze!")),l.a.createElement(v.a,null,"Minigest fa affidamento su ",l.a.createElement("b",null,"Postgresql")," e su ",l.a.createElement("b",null,"WeasyPrint")," e funziona alla perfezione su un server linux. Se volete installare minigest su windows, vi consiglio di usarlo attraverso"," ",l.a.createElement(ie.a,{to:"/installazione/docker",color:"secondary",component:H},"Docker"),"!"),l.a.createElement(Z,{mb:4,mt:4,caption:"Ubuntu"},"sudo apt install \\\npython3 python3-pip python3-dev \\\npython3-venv python3-setuptools python3-wheel \\\npython3-cffi build-essential libcairo2 \\\nlibpango-1.0-0 libpangocairo-1.0-0 libgdk-pixbuf2.0-0 \\\nlibffi-dev shared-mime-info \\\npostgresql-contrib postgresql"),l.a.createElement(v.a,{gutterBottom:!0},"In questo comando sono incluse anche tutte le dipendenze WeasyPrint, se volete saperne di pi\xf9, visitate la"," ",l.a.createElement(ie.a,{href:"https://weasyprint.readthedocs.io/en/latest/install.html",target:"_blank",rel:"noopener noreferrer",color:"secondary"},"documentazione WeasyPrint"),"."),l.a.createElement(v.a,null,"Se postgresql \xe8 gi\xe0 installato sul server, eliminate l'ultima riga del comando. Tuttavia, per far funzionare i binaries di psycopg2, sar\xe0 comunque necessario che ",l.a.createElement("code",null,"postgresql-contrib")," sia installato!"))}function ze(e){return l.a.createElement(V,null,l.a.createElement($,null,l.a.createElement(v.a,{variant:"h4"},"Installazione delle Applicazioni")),l.a.createElement(v.a,{gutterBottom:!0},"Siccome ",l.a.createElement("b",null,"minigest")," \xe8 una collezione di applicazioni django, tutte le applicazioni vanno installate. Tutte le applicazioni dipendono l'una dall'altra, quindi \xe8 veramente necessario installarle tutte!"),l.a.createElement(v.a,{gutterBottom:!0},"Create il vostro progetto django e chiamatelo come volete, installate poi ",l.a.createElement("b",null,"minigest")," col provider (pip, poetry...) che pi\xf9 desiderate, installate ",l.a.createElement("b",null,"postgresql"),", create il vostro database e ricordate di configurare django affinch\xe9 possa connettersi a postgresql."),l.a.createElement(v.a,null,"A questo punto, in ",l.a.createElement("code",null,"INSTALLED_APPS")," devono essere presenti le seguenti applicazioni installate:"),l.a.createElement(Z,{caption:"settings.py",mt:4,mb:4},'INSTALLED_APPS = [\n    "django.contrib.admin",\n    "django.contrib.auth",\n    "polymorphic", # deve essere installata prima di contenttypes!!!\n    "django.contrib.contenttypes",\n    "django.contrib.sessions",\n    "django.contrib.messages",\n    "django.contrib.staticfiles",\n    "localflavor", # dipendenza\n    "rest_framework", # dipendenza\n    "corsheaders", # dipendenza\n]\n\n# minigest applicazioni\nINSTALLED_APPS += [\n    "minigest.anagrafica",\n    "minigest.common",\n    "minigest.docfisc",\n    "minigest.fisco",\n    "minigest.negozi",\n    "minigest.pdf",\n    "minigest.rest",\n    "minigest.tributi",\n    "minigest.www",\n]\n'),l.a.createElement(v.a,null,"\xc8 possibile installare tutto il pacchetto minigest anche importando la lista stessa delle applicazioni"),l.a.createElement(Z,{caption:"settings.py",mt:2},"from minigest.settings import APPS as MINIGEST_APPS"),l.a.createElement(v.a,null,"Attenzione! Il pacchetto ",l.a.createElement("code",null,"APPS")," non contiene anche tutte le dipendenze, quelle vanno comunque installate a parte!"),l.a.createElement(Z,{caption:"minigest.settings",mt:2},'APPS = [\n    "minigest.anagrafica",\n    "minigest.common",\n    "minigest.docfisc",\n    "minigest.fisco",\n    "minigest.negozi",\n    "minigest.pdf",\n    "minigest.rest",\n    "minigest.tributi",\n    "minigest.www",\n]'))}function ye(e){return l.a.createElement(V,null,l.a.createElement($,null,l.a.createElement(v.a,{variant:"h4",gutterBottom:!0},"Configurazione"),l.a.createElement(v.a,{variant:"subtitle1"},"Sar\xe0 altres\xec necessario configurare il progetto django affinch\xe9 funzioni nel modo corretto")),l.a.createElement(v.a,null,"La seguente configurazione pu\xf2 essere trovata anche nella cartella"," ",l.a.createElement(ie.a,{color:"secondary",href:"https://github.com/dcdeiv/minigest/tree/master/webapp/settings",rel:"noopener noreferrer",target:"_blank"},"webapp/settings"),"."),l.a.createElement(V,{mt:2},l.a.createElement($,null,l.a.createElement(v.a,{variant:"h6",gutterBottom:!0},"AUTH"),l.a.createElement(v.a,{variant:"subtitle1"},"Come spiegato prima, ",l.a.createElement("b",null,"minigest")," sovrascrive le funzionalit\xe0 del modello ",l.a.createElement("code",null,"User"),", quindi bisogna cambiare il comportamento del progetto django affinch\xe9 utilizzi il modello degli utenti di minigest!")),l.a.createElement(v.a,null,"In ",l.a.createElement("code",null,"settings.py")," aggiungere la seguente impostazione:"),l.a.createElement(Z,{caption:"settings.py",mt:2},'AUTH_USER_MODEL = "anagrafica.Utente"')),l.a.createElement(V,null,l.a.createElement($,null,l.a.createElement(v.a,{variant:"h6",gutterBottom:!0},"REST"),l.a.createElement(v.a,{variant:"subtitle1"},"Aggiungere la configurazione di ",l.a.createElement("code",null,"djangorestframewok"),".")),l.a.createElement(Z,{caption:"settings.py",mt:2},'REST_FRAMEWORK = {\n    "DEFAULT_PERMISSION_CLASSES": ["rest_framework.permissions.IsAuthenticated"]\n}')),l.a.createElement(V,null,l.a.createElement($,null,l.a.createElement(v.a,{variant:"h6"},"CSRF e CORS"),l.a.createElement(v.a,{variant:"subtitle1"},"\xc8 molto importante aggiungere la configurazione del cookie CSRF e del CORS origin. L'applicazione potrebbe non funzionare altrimenti!")),l.a.createElement(Z,{mt:2,caption:"settings.py"},'CSRF_COOKIE_NAME = "csrftoken"\nCORS_ORIGIN_ALLOW_ALL = False')),l.a.createElement(V,null,l.a.createElement($,null,l.a.createElement(v.a,{variant:"h6",gutterBottom:!0},"urls.py"),l.a.createElement(v.a,{variant:"subtitle1"},"Aggiungere gli url di minigest al vostro progetto.")),l.a.createElement(Z,{caption:"urls.py",mt:2},'from django.urls import include, path, re_path\n\nfrom django.contrib import admin\n\nurlpatterns = [\n    path("admin/", admin.site.urls,),\n    path("api/", include("minigest.rest.urls")),\n    path("pdf/", include("minigest.pdf.urls")),\n    re_path(r"", include("minigest.www.urls")),\n]')))}function ke(e){return l.a.createElement(V,null,l.a.createElement($,null,l.a.createElement(v.a,{variant:"h4",gutterBottom:!0},"Ultimi Passaggi"),l.a.createElement(v.a,{variant:"subtitle1"},"Una volta finito di configurare il progetto, si possono eseguire le migrazioni, creare il ",l.a.createElement("code",null,"superuser")," e infine utilizzare"," ",l.a.createElement("b",null,"minigest!"))),l.a.createElement(V,null,l.a.createElement(v.a,null,"Per prima cosa esegui le migrazioni!"),l.a.createElement(Z,{mt:2,caption:"shell"},"python manage.py migrate")),l.a.createElement(V,null,l.a.createElement(v.a,null,"Crea il tuo utente superuser"),l.a.createElement(Z,{mt:2,caption:"shell"},"python manage.py createsuperuser")),l.a.createElement(V,null,l.a.createElement(v.a,null,"Raccogli i file statici!"),l.a.createElement(Z,{mt:2,caption:"shell"},"python manage.py collectstatic")),l.a.createElement(V,null,l.a.createElement(v.a,null,"Prova minigest!"),l.a.createElement(Z,{mt:2,caption:"shell"},"python manage.py runserver")))}function we(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(J,null,l.a.createElement(v.a,{variant:"overline"},"Installazione"),l.a.createElement(v.a,{variant:"h3"},"PyPi"),l.a.createElement(k.a,{mt:4},l.a.createElement(k.a,{mb:4},l.a.createElement(y.a,null)),l.a.createElement(Z,{mb:4},"pip install minigest"))),l.a.createElement(ve,{id:"installazione-pypi-introduzione"}),l.a.createElement(fe,{id:"installazione-pypi-dipendenze"}),l.a.createElement(ze,{id:"installazione-pypi-applicazioni"}),l.a.createElement(ye,{id:"installazione-pypi-configurazione"}),l.a.createElement(ke,{id:"installazione-pypi-fine"}))}function Se(e){var a=Object(u.g)().path;return l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"".concat(a,"/pypi"),component:we}),l.a.createElement(u.a,{path:"".concat(a,"/docker"),component:he}))}function Pe(e){return l.a.createElement(s.a,{basename:"/"},l.a.createElement(G,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/",component:re}),l.a.createElement(u.a,{path:"/installazione",component:Se}))))}var je=t(69),_e=Object(je.a)({common:{white:"#F8F8F8",black:"#2B2B2B"},palette:{type:"dark"}});i.a.render(l.a.createElement(o.a,{locale:"it"},l.a.createElement(c.a,{theme:_e},l.a.createElement(m.a,null),l.a.createElement(Pe,null))),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.3946ed1c.chunk.js.map