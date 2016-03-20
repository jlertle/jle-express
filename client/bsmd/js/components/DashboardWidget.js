"use strict";

var m = require("mithril");

var DashboardWidget = {
  controller: function() {
    //List.vm.init();
  },
  view: function() {
    return m(".container", [
		m("nav.navbar.navbar-inverse.navbar-fixed-top", [
			m(".container-fluid", [
				m(".navbar-header", [
					m("button.navbar-toggle.collapsed[aria-controls='navbar'][aria-expanded='false'][data-target='#navbar'][data-toggle='collapse'][type='button']", [
						m("span.sr-only", "Toggle navigation"),
						m("span.icon-bar"),
						m("span.icon-bar"),
						m("span.icon-bar")
					]),
					m("a.navbar-brand[href='#']", "Project name")
				]),
				m(".navbar-collapse.collapse[id='navbar']", [
					m("ul.nav.navbar-nav.navbar-right", [
						m("li", [m("a[href='#']", "Dashboard")]),
						m("li", [m("a[href='#']", "Settings")]),
						m("li", [m("a[href='#']", "Profile")]),
						m("li", [m("a[href='#']", "Help")])
					]),
					m("form.navbar-form.navbar-right", [
						m("input.form-control[placeholder='Search...'][type='text']")
					])
				])
			])
		]),
		m(".container-fluid", [
			m(".row", [
				m(".col-sm-3.col-md-2.sidebar", [
					m("ul.nav.nav-sidebar", [
						m("li.active", [m("a[href='#']", ["Overview ",m("span.sr-only", "(current)")])]),
						m("li", [m("a[href='#']", "Reports")]),
						m("li", [m("a[href='#']", "Analytics")]),
						m("li", [m("a[href='#']", "Export")])
					]),
					m("ul.nav.nav-sidebar", [
						m("li", [m("a[href='']", "Nav item")]),
						m("li", [m("a[href='']", "Nav item again")]),
						m("li", [m("a[href='']", "One more nav")]),
						m("li", [m("a[href='']", "Another nav item")]),
						m("li", [m("a[href='']", "More navigation")])
					]),
					m("ul.nav.nav-sidebar", [
						m("li", [m("a[href='']", "Nav item again")]),
						m("li", [m("a[href='']", "One more nav")]),
						m("li", [m("a[href='']", "Another nav item")])
					])
				]),
				m(".col-sm-9.col-sm-offset-3.col-md-10.col-md-offset-2.main", [
					m("h1.page-header", "Dashboard"),
					m(".row.placeholders", [
						m(".col-xs-6.col-sm-3.placeholder", [
							m("img.img-responsive[alt='Generic placeholder thumbnail'][height='200'][src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='][width='200']"),
							m("h4", "Label"),
							m("span.text-muted", "Something else")
						]),
						m(".col-xs-6.col-sm-3.placeholder", [
							m("img.img-responsive[alt='Generic placeholder thumbnail'][height='200'][src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='][width='200']"),
							m("h4", "Label"),
							m("span.text-muted", "Something else")
						]),
						m(".col-xs-6.col-sm-3.placeholder", [
							m("img.img-responsive[alt='Generic placeholder thumbnail'][height='200'][src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='][width='200']"),
							m("h4", "Label"),
							m("span.text-muted", "Something else")
						]),
						m(".col-xs-6.col-sm-3.placeholder", [
							m("img.img-responsive[alt='Generic placeholder thumbnail'][height='200'][src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='][width='200']"),
							m("h4", "Label"),
							m("span.text-muted", "Something else")
						])
					]),
					m("h2.sub-header", "Section title"),
					m(".table-responsive", [
						m("table.table.table-striped", [
							m("thead", [
								m("tr", [
									m("th", "#"),
									m("th", "Header"),
									m("th", "Header"),
									m("th", "Header"),
									m("th", "Header")
								])
							]),
							m("tbody", [
								m("tr", [
									m("td", "1,001"),
									m("td", "Lorem"),
									m("td", "ipsum"),
									m("td", "dolor"),
									m("td", "sit")
								]),
								m("tr", [
									m("td", "1,002"),
									m("td", "amet"),
									m("td", "consectetur"),
									m("td", "adipiscing"),
									m("td", "elit")
								]),
								m("tr", [
									m("td", "1,003"),
									m("td", "Integer"),
									m("td", "nec"),
									m("td", "odio"),
									m("td", "Praesent")
								]),
								m("tr", [
									m("td", "1,003"),
									m("td", "libero"),
									m("td", "Sed"),
									m("td", "cursus"),
									m("td", "ante")
								]),
								m("tr", [
									m("td", "1,004"),
									m("td", "dapibus"),
									m("td", "diam"),
									m("td", "Sed"),
									m("td", "nisi")
								]),
								m("tr", [
									m("td", "1,005"),
									m("td", "Nulla"),
									m("td", "quis"),
									m("td", "sem"),
									m("td", "at")
								]),
								m("tr", [
									m("td", "1,006"),
									m("td", "nibh"),
									m("td", "elementum"),
									m("td", "imperdiet"),
									m("td", "Duis")
								]),
								m("tr", [
									m("td", "1,007"),
									m("td", "sagittis"),
									m("td", "ipsum"),
									m("td", "Praesent"),
									m("td", "mauris")
								]),
								m("tr", [
									m("td", "1,008"),
									m("td", "Fusce"),
									m("td", "nec"),
									m("td", "tellus"),
									m("td", "sed")
								]),
								m("tr", [
									m("td", "1,009"),
									m("td", "augue"),
									m("td", "semper"),
									m("td", "porta"),
									m("td", "Mauris")
								]),
								m("tr", [
									m("td", "1,010"),
									m("td", "massa"),
									m("td", "Vestibulum"),
									m("td", "lacinia"),
									m("td", "arcu")
								]),
								m("tr", [
									m("td", "1,011"),
									m("td", "eget"),
									m("td", "nulla"),
									m("td", "Class"),
									m("td", "aptent")
								]),
								m("tr", [
									m("td", "1,012"),
									m("td", "taciti"),
									m("td", "sociosqu"),
									m("td", "ad"),
									m("td", "litora")
								]),
								m("tr", [
									m("td", "1,013"),
									m("td", "torquent"),
									m("td", "per"),
									m("td", "conubia"),
									m("td", "nostra")
								]),
								m("tr", [
									m("td", "1,014"),
									m("td", "per"),
									m("td", "inceptos"),
									m("td", "himenaeos"),
									m("td", "Curabitur")
								]),
								m("tr", [
									m("td", "1,015"),
									m("td", "sodales"),
									m("td", "ligula"),
									m("td", "in"),
									m("td", "libero")
								])
							])
						])
					])
				])
			])
		])
	]);
  }
};

module.exports = DashboardWidget;
