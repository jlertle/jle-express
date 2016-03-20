"use strict";

var m = require("mithril");

var ExamplesWidget = {
  controller: function() {
    //List.vm.init();
  },
  view: function() {
    return m(".container", [
      m(".page-header[id='banner']", [
        m(".row", [
          m(".col-sm-6", [
            m("h1", "Material Design"),
            m("p.lead", "Based on Google Material design")
          ]),
          m(".col-sm-6", [
            m(".well.infobox", [
              m("p", [
                m("em", "Material Design for Bootstrap"),
                m("a[href='http://www.google.com/design/spec/material-design/']", "Google Material Design")
              ]),
              m("p", [
                m("a[href='https://github.com/FezVrasta/bootstrap-material-design/issues']", "reporting bugs and ideas"),
                "."
              ]),
              m("p", [
                "Read more about ",
                m("em", "Material Design for Bootstrap"),
                m("a[href='https://github.com/FezVrasta/bootstrap-material-design']", "at the Github page"),
                "."
              ]),
              m("a.btn.btn-sup.btn-material-pink.btn-raised[href='https://github.com/FezVrasta/bootstrap-material-design/archive/master.zip']", [
                m("i.material-icons", "file_download"),
                m("span", "DOWNLOAD")
              ]),
              m("a.btn.btn-sup.btn-material-brown[href='https://www.gittip.com/FezVrasta/']", [
                m("i.material-icons", "favorite_border"),
                m("span", "GITTIP")
              ]),
              m("a.btn.btn-sup.btn-material-deeppurple[href='https://github.com/FezVrasta/bootstrap-material-design/issues']", [
                m("i.material-icons", "info_outline"),
                m("span", "ISSUES")
              ])
            ])
          ])
        ])
      ]),
      m(".bs-docs-section.clearfix", [
        m(".row", [
          m(".col-md-12", [
            m(".page-header", [
              m("h1[id='navbar']", "Navbar")
            ]),
            m(".bs-component", [
              m(".navbar.navbar-default", [
                m(".container-fluid", [
                  m(".navbar-header", [
                    m("button.navbar-toggle[data-target='.navbar-responsive-collapse'][data-toggle='collapse'][type='button']", [
                      m("span.icon-bar"),
                      m("span.icon-bar"),
                      m("span.icon-bar")
                    ]),
                    m("a.navbar-brand[href='javascript:void(0)']", "Brand")
                  ]),
                  m(".navbar-collapse.collapse.navbar-responsive-collapse", [
                    m("ul.nav.navbar-nav", [
                      m("li.active", [m("a[href='javascript:void(0)']", "Active")]),
                      m("li", [m("a[href='javascript:void(0)']", "Link")]),
                      m("li.dropdown", [
                        m("a.dropdown-toggle[data-target='#'][data-toggle='dropdown'][href='bootstrap-elements.html']", [
                          "Dropdown", m("b.caret")
                        ]),
                        m("ul.dropdown-menu", [
                          m("li", [m("a[href='javascript:void(0)']", "Action")]),
                          m("li", [m("a[href='javascript:void(0)']", "Another action")]),
                          m("li", [m("a[href='javascript:void(0)']", "Something else here")]),
                          m("li.divider"),
                          m("li.dropdown-header", "Dropdown header"),
                          m("li", [m("a[href='javascript:void(0)']", "Separated link")]),
                          m("li", [m("a[href='javascript:void(0)']", "One more separated link")])
                        ])
                      ])
                    ]),
                    m("form.navbar-form.navbar-left", [
                      m(".form-group", [
                        m("input.form-control.col-md-8[placeholder='Search'][type='text']")
                      ])
                    ]),
                    m("ul.nav.navbar-nav.navbar-right", [
                      m("li", [m("a[href='javascript:void(0)']", "Link")]),
                      m("li.dropdown", [
                        m("a.dropdown-toggle[data-target='#'][data-toggle='dropdown'][href='bootstrap-elements.html']", [
                          "Dropdown", m("b.caret")
                        ]),
                        m("ul.dropdown-menu", [
                          m("li", [m("a[href='javascript:void(0)']", "Action")]),
                          m("li", [m("a[href='javascript:void(0)']", "Another action")]),
                          m("li", [m("a[href='javascript:void(0)']", "Something else here")]),
                          m("li.divider"),
                          m("li", [m("a[href='javascript:void(0)']", "Separated link")])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            m(".bs-component", [
              m(".navbar.navbar-warning", [
                m(".container-fluid", [
                  m(".navbar-header", [
                    m("button.navbar-toggle[data-target='.navbar-warning-collapse'][data-toggle='collapse'][type='button']", [
                      m("span.icon-bar"),
                      m("span.icon-bar"),
                      m("span.icon-bar")
                    ]),
                    m("a.navbar-brand[href='javascript:void(0)']", "Brand")
                  ]),
                  m(".navbar-collapse.collapse.navbar-warning-collapse", [
                    m("ul.nav.navbar-nav", [
                      m("li.active", [m("a[href='javascript:void(0)']", "Active")]),
                      m("li", [m("a[href='javascript:void(0)']", "Link")]),
                      m("li.dropdown", [
                        m("a.dropdown-toggle[data-target='#'][data-toggle='dropdown'][href='bootstrap-elements.html']", [
                          "Dropdown", m("b.caret")
                        ]),
                        m("ul.dropdown-menu", [
                          m("li", [m("a[href='javascript:void(0)']", "Action")]),
                          m("li", [m("a[href='javascript:void(0)']", "Another action")]),
                          m("li", [m("a[href='javascript:void(0)']", "Something else here")]),
                          m("li.divider"),
                          m("li.dropdown-header", "Dropdown header"),
                          m("li", [m("a[href='javascript:void(0)']", "Separated link")]),
                          m("li", [m("a[href='javascript:void(0)']", "One more separated link")])
                        ])
                      ])
                    ]),
                    m("form.navbar-form.navbar-left", [
                      m(".form-group", [
                        m("input.form-control.col-md-8[placeholder='Search'][type='text']")
                      ])
                    ]),
                    m("ul.nav.navbar-nav.navbar-right", [
                      m("li", [m("a[href='javascript:void(0)']", "Link")]),
                      m("li.dropdown", [
                        m("a.dropdown-toggle[data-target='#'][data-toggle='dropdown'][href='bootstrap-elements.html']", [
                          "Dropdown", m("b.caret")
                        ]),
                        m("ul.dropdown-menu", [
                          m("li", [m("a[href='javascript:void(0)']", "Action")]),
                          m("li", [m("a[href='javascript:void(0)']", "Another action")]),
                          m("li", [m("a[href='javascript:void(0)']", "Something else here")]),
                          m("li.divider"),
                          m("li", [m("a[href='javascript:void(0)']", "Separated link")])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            m(".bs-component", [
              m(".navbar.navbar-inverse", [
                m(".container-fluid", [
                  m(".navbar-header", [
                    m("button.navbar-toggle[data-target='.navbar-inverse-collapse'][data-toggle='collapse'][type='button']", [
                      m("span.icon-bar"),
                      m("span.icon-bar"),
                      m("span.icon-bar")
                    ]),
                    m("a.navbar-brand[href='javascript:void(0)']", "Brand")
                  ]),
                  m(".navbar-collapse.collapse.navbar-inverse-collapse", [
                    m("ul.nav.navbar-nav", [
                      m("li.active", [m("a[href='javascript:void(0)']", "Active")]),
                      m("li", [m("a[href='javascript:void(0)']", "Link")]),
                      m("li.dropdown", [
                        m("a.dropdown-toggle[data-target='#'][data-toggle='dropdown'][href='bootstrap-elements.html']", [
                          "Dropdown", m("b.caret")
                        ]),
                        m("ul.dropdown-menu", [
                          m("li", [m("a[href='javascript:void(0)']", "Action")]),
                          m("li", [m("a[href='javascript:void(0)']", "Another action")]),
                          m("li", [m("a[href='javascript:void(0)']", "Something else here")]),
                          m("li.divider"),
                          m("li.dropdown-header", "Dropdown header"),
                          m("li", [m("a[href='javascript:void(0)']", "Separated link")]),
                          m("li", [m("a[href='javascript:void(0)']", "One more separated link")])
                        ])
                      ])
                    ]),
                    m("form.navbar-form.navbar-left", [
                      m(".form-group", [
                        m("input.form-control.col-md-8[placeholder='Search'][type='text']")
                      ])
                    ]),
                    m("ul.nav.navbar-nav.navbar-right", [
                      m("li", [m("a[href='javascript:void(0)']", "Link")]),
                      m("li.dropdown", [
                        m("a.dropdown-toggle[data-target='#'][data-toggle='dropdown'][href='bootstrap-elements.html']", [
                          "Dropdown", m("b.caret")
                        ]),
                        m("ul.dropdown-menu", [
                          m("li", [m("a[href='javascript:void(0)']", "Action")]),
                          m("li", [m("a[href='javascript:void(0)']", "Another action")]),
                          m("li", [m("a[href='javascript:void(0)']", "Something else here")]),
                          m("li.divider"),
                          m("li", [m("a[href='javascript:void(0)']", "Separated link")])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      m(".bs-docs-section", [
        m(".page-header", [
          m(".row", [
            m(".col-md-12", [
              m("h1[id='buttons']", "Buttons")
            ])
          ])
        ]),
        m(".row", [
          m(".col-md-6", [
            m("h3", ["Flat buttons ", m("small", "default - no class needed")]),
            m("p.bs-component", [
              m("a.btn[href='javascript:void(0)']", [m("code", "btn"), " only"]),
              m("a.btn.active[href='javascript:void(0)']", [m("code", ".active")]),
              m("a.btn.btn-default[href='javascript:void(0)']", "Default"),
              m("a.btn.btn-primary[href='javascript:void(0)']", "Primary"),
              m("a.btn.btn-success[href='javascript:void(0)']", "Success"),
              m("a.btn.btn-info[href='javascript:void(0)']", "Info"),
              m("a.btn.btn-warning[href='javascript:void(0)']", "Warning"),
              m("a.btn.btn-danger[href='javascript:void(0)']", "Danger"),
              m("a.btn.btn-link[href='javascript:void(0)']", "Link")
            ]),
            m("h3", ["Raised buttons ", m("small", [m("code", ".btn-raised")])]),
            m("p.bs-component", [
              m("a.btn.btn-raised.active[href='javascript:void(0)']", [m("code", ".active")]),
              m("a.btn.btn-raised.btn-default[href='javascript:void(0)']", "Default"),
              m("a.btn.btn-raised.btn-primary[href='javascript:void(0)']", "Primary"),
              m("a.btn.btn-raised.btn-success[href='javascript:void(0)']", "Success"),
              m("a.btn.btn-raised.btn-info[href='javascript:void(0)']", "Info"),
              m("a.btn.btn-raised.btn-warning[href='javascript:void(0)']", "Warning"),
              m("a.btn.btn-raised.btn-danger[href='javascript:void(0)']", "Danger"),
              m("a.btn.btn-raised.btn-link[href='javascript:void(0)']", "Link")
            ]),
            m("h3", "Disabled buttons"),
            m("fieldset[disabled='true']", [
              m("h3", [m("small", "flat - default - no class needed")]),
              m("p.bs-component", [
                m("a.btn[href='javascript:void(0)']", [m("code", "btn"), " only"]),
                m("a.btn.btn-default[href='javascript:void(0)']", "Default"),
                m("a.btn.btn-primary[href='javascript:void(0)']", "Primary"),
                m("a.btn.btn-success[href='javascript:void(0)']", "Success"),
                m("a.btn.btn-info[href='javascript:void(0)']", "Info"),
                m("a.btn.btn-warning[href='javascript:void(0)']", "Warning"),
                m("a.btn.btn-danger[href='javascript:void(0)']", "Danger"),
                m("a.btn.btn-link[href='javascript:void(0)']", "Link")
              ]),
              m("h3", [m("small", [m("code", ".btn-raised")])]),
              m("p.bs-component", [
                m("a.btn.btn-raised.btn-default[href='javascript:void(0)']", "Default"),
                m("a.btn.btn-raised.btn-primary[href='javascript:void(0)']", "Primary"),
                m("a.btn.btn-raised.btn-success[href='javascript:void(0)']", "Success"),
                m("a.btn.btn-raised.btn-info[href='javascript:void(0)']", "Info"),
                m("a.btn.btn-raised.btn-warning[href='javascript:void(0)']", "Warning"),
                m("a.btn.btn-raised.btn-danger[href='javascript:void(0)']", "Danger"),
                m("a.btn.btn-raised.btn-link[href='javascript:void(0)']", "Link")
              ])
            ]),
            m("h3", "Button sizes"),
            m("p.bs-component", [
              m("a.btn.btn-raised.btn-lg[href='javascript:void(0)']", "Large button"),
              m("a.btn.btn-raised[href='javascript:void(0)']", "Default button"),
              m("a.btn.btn-raised.btn-sm[href='javascript:void(0)']", "Small button"),
              m("a.btn.btn-raised.btn-xs[href='javascript:void(0)']", "xs button")
            ]),
            m("h3", ["Floating action buttons ", m("small", "a.k.a fab")]),
            m("p.bs-component", [
              m("a.btn.btn-default.btn-fab[href='javascript:void(0)']", [m("i.material-icons", "grade")]),
              m("a.btn.btn-primary.btn-fab[href='javascript:void(0)']", [m("i.material-icons", "grade")]),
              m("a.btn.btn-success.btn-fab[href='javascript:void(0)']", [m("i.material-icons", "grade")]),
              m("a.btn.btn-info.btn-fab[href='javascript:void(0)']", [m("i.material-icons", "grade")]),
              m("a.btn.btn-warning.btn-fab[href='javascript:void(0)']", [m("i.material-icons", "grade")]),
              m("a.btn.btn-danger.btn-fab[href='javascript:void(0)']", [m("i.material-icons", "grade")])
            ]),
            m("h4", [m("small", [m("code", ".btn-group-sm .btn-fab"), " or ", m("code", ".btn-fab-mini")])]),
            m("p.bs-component.btn-group-sm", [
              m("a.btn.btn-default.btn-fab[href='javascript:void(0)']", [m("i.material-icons", "grade")]),
              m("a.btn.btn-primary.btn-fab[href='javascript:void(0)']", [m("i.material-icons", "grade")]),
              m("a.btn.btn-success.btn-fab[href='javascript:void(0)']", [m("i.material-icons", "grade")]),
              m("a.btn.btn-info.btn-fab[href='javascript:void(0)']", [m("i.material-icons", "grade")]),
              m("a.btn.btn-warning.btn-fab[href='javascript:void(0)']", [m("i.material-icons", "grade")]),
              m("a.btn.btn-danger.btn-fab[href='javascript:void(0)']", [m("i.material-icons", "grade")])
            ])
          ]),
          m(".col-md-6", [
            m("h2", ["Group variations with ", m("small", [m("code", ".btn-raised")])]),
            m("h3", "Button groups"),
            m("div", {
              style: {
                "margin-bottom": " 15px"
              }
            }, [
              m(".btn-toolbar.bs-component", {
                style: {
                  "margin": " 0"
                }
              }, [
                m(".btn-group", [
                  m("a.btn[href='javascript:void(0)']", "btn only"),
                  m("a.btn.dropdown-toggle[data-target='#'][data-toggle='dropdown'][href='bootstrap-elements.html']", [m("span.caret")]),
                  m("ul.dropdown-menu", [
                    m("li", [m("a[href='javascript:void(0)']", "Action")]),
                    m("li", [m("a[href='javascript:void(0)']", "Another action")]),
                    m("li", [m("a[href='javascript:void(0)']", "Something else here")]),
                    m("li.divider"),
                    m("li", [m("a[href='javascript:void(0)']", "Separated link")])
                  ])
                ]),
                m(".btn-group", [
                  m("a.btn.btn-default.btn-raised[href='javascript:void(0)']", "Default raised"),
                  m("a.btn.btn-default.btn-raised.dropdown-toggle[data-target='#'][data-toggle='dropdown'][href='bootstrap-elements.html']", [m("span.caret")]),
                  m("ul.dropdown-menu", [
                    m("li", [m("a[href='javascript:void(0)']", "Action")]),
                    m("li", [m("a[href='javascript:void(0)']", "Another action")]),
                    m("li", [m("a[href='javascript:void(0)']", "Something else here")]),
                    m("li.divider"),
                    m("li", [m("a[href='javascript:void(0)']", "Separated link")])
                  ])
                ]),
                m(".btn-group", [
                  m("a.btn.btn-primary.btn-raised[href='javascript:void(0)']", "Primary raised"),
                  m("a.btn.btn-primary.btn-raised.dropdown-toggle[data-target='#'][data-toggle='dropdown'][href='bootstrap-elements.html']", [m("span.caret")]),
                  m("ul.dropdown-menu", [
                    m("li", [m("a[href='javascript:void(0)']", "Action")]),
                    m("li", [m("a[href='javascript:void(0)']", "Another action")]),
                    m("li", [m("a[href='javascript:void(0)']", "Something else here")]),
                    m("li.divider"),
                    m("li", [m("a[href='javascript:void(0)']", "Separated link")])
                  ])
                ]),
                m(".btn-group", [
                  m("a.btn.btn-success[href='javascript:void(0)']", "Success"),
                  m("a.btn.btn-success.dropdown-toggle[data-target='#'][data-toggle='dropdown'][href='bootstrap-elements.html']", [m("span.caret")]),
                  m("ul.dropdown-menu", [
                    m("li", [m("a[href='javascript:void(0)']", "Action")]),
                    m("li", [m("a[href='javascript:void(0)']", "Another action")]),
                    m("li", [m("a[href='javascript:void(0)']", "Something else here")]),
                    m("li.divider"),
                    m("li", [m("a[href='javascript:void(0)']", "Separated link")])
                  ])
                ]),
                m(".btn-group", [
                  m("a.btn.btn-info[href='javascript:void(0)']", "Info"),
                  m("a.btn.btn-info.dropdown-toggle[data-target='#'][data-toggle='dropdown'][href='bootstrap-elements.html']", [m("span.caret")]),
                  m("ul.dropdown-menu", [
                    m("li", [m("a[href='javascript:void(0)']", "Action")]),
                    m("li", [m("a[href='javascript:void(0)']", "Another action")]),
                    m("li", [m("a[href='javascript:void(0)']", "Something else here")]),
                    m("li.divider"),
                    m("li", [m("a[href='javascript:void(0)']", "Separated link")])
                  ])
                ]),
                m(".btn-group", [
                  m("a.btn.btn-warning[href='javascript:void(0)']", "Warning"),
                  m("a.btn.btn-warning.dropdown-toggle[data-target='#'][data-toggle='dropdown'][href='bootstrap-elements.html']", [m("span.caret")]),
                  m("ul.dropdown-menu", [
                    m("li", [m("a[href='javascript:void(0)']", "Action")]),
                    m("li", [m("a[href='javascript:void(0)']", "Another action")]),
                    m("li", [m("a[href='javascript:void(0)']", "Something else here")]),
                    m("li.divider"),
                    m("li", [m("a[href='javascript:void(0)']", "Separated link")])
                  ])
                ]),
                m(".btn-group", [
                  m("a.btn.btn-danger[href='javascript:void(0)']", "Danger"),
                  m("a.btn.btn-danger.dropdown-toggle[data-target='#'][data-toggle='dropdown'][href='bootstrap-elements.html']", [m("span.caret")]),
                  m("ul.dropdown-menu", [
                    m("li", [m("a[href='javascript:void(0)']", "Action")]),
                    m("li", [m("a[href='javascript:void(0)']", "Another action")]),
                    m("li", [m("a[href='javascript:void(0)']", "Something else here")]),
                    m("li.divider"),
                    m("li", [m("a[href='javascript:void(0)']", "Separated link")])
                  ])
                ])
              ])
            ]),
            m("h3", [m("small", [m("code", "btn-lg.btn-block.btn-raised")])]),
            m(".bs-component", [
              m("a.btn.btn-default.btn-lg.btn-block.btn-raised[href='javascript:void(0)']", "Block level button"),
              m("fieldset[disabled='true']", [
                m("a.btn.btn-default.btn-lg.btn-block.btn-raised[href='javascript:void(0)']", "Block level button disabled")
              ])
            ]),
            m(".bs-component", {
              style: {
                "margin-bottom": " 15px"
              }
            }, [
              m("h3", [m("small", [m("code", "btn-group.btn-group-justified.btn-group-raised")])]),
              m(".btn-group.btn-group-justified.btn-group-raised", [
                m("a.btn.[href='javascript:void(0)']", "Left"),
                m("a.btn.[href='javascript:void(0)']", "Middle"),
                m("a.btn.[href='javascript:void(0)']", "Right")
              ]),
              m("h3", [m("small", ["disabled ", m("code", "btn-group.btn-group-justified.btn-group-raised")])]),
              m("fieldset[disabled='true']", [
                m(".btn-group.btn-group-justified.btn-group-raised", [
                  m("a.btn.[href='javascript:void(0)']", "Left"),
                  m("a.btn.[href='javascript:void(0)']", "Middle"),
                  m("a.btn.[href='javascript:void(0)']", "Right")
                ])
              ])
            ]),
            m(".bs-component", {
              style: {
                "margin-bottom": " 15px"
              }
            }, [
              m("h3", [m("small", [m("code", "btn-toolbar")])]),
              m(".btn-toolbar", [
                m(".btn-group", [
                  m("a.btn[href='javascript:void(0)']", "1"),
                  m("a.btn[href='javascript:void(0)']", "2"),
                  m("a.btn[href='javascript:void(0)']", "3"),
                  m("a.btn[href='javascript:void(0)']", "4")
                ]),
                m(".btn-group", [
                  m("a.btn.btn-raised[href='javascript:void(0)']", "5"),
                  m("a.btn.btn-raised[href='javascript:void(0)']", "6"),
                  m("a.btn.btn-raised[href='javascript:void(0)']", "7")
                ]),
                m(".btn-group", [
                  m("a.btn.btn-raised[href='javascript:void(0)']", "8"),
                  m(".btn-group", [
                    m("a.btn.btn-raised.dropdown-toggle[data-target='#'][data-toggle='dropdown'][href='bootstrap-elements.html']", [
                      "Dropdown", m("span.caret")
                    ]),
                    m("ul.dropdown-menu", [
                      m("li", [m("a[href='javascript:void(0)']", "Dropdown link")]),
                      m("li", [m("a[href='javascript:void(0)']", "Dropdown link")]),
                      m("li", [m("a[href='javascript:void(0)']", "Dropdown link")])
                    ])
                  ])
                ])
              ])
            ]),
            m(".bs-component", [
              m("h3", [m("small", [m("code", ".btn-group-vertical")])]),
              m(".btn-group-vertical", [
                m("a.btn.btn-raised[href='javascript:void(0)']", "Button"),
                m("a.btn.btn-raised[href='javascript:void(0)']", "Button"),
                m("a.btn.btn-raised[href='javascript:void(0)']", "Button"),
                m("a.btn.btn-raised[href='javascript:void(0)']", "Button")
              ])
            ])
          ])
        ])
      ]),
      m(".bs-docs-section", [
        m(".row", [
          m(".col-md-12", [
            m(".page-header", [
              m("h1[id='type']", "Typography")
            ])
          ])
        ]),
        m(".row", [
          m(".col-md-4", [
            m(".bs-component", [
              m("h1", "Heading 1"),
              m("h2", "Heading 2"),
              m("h3", "Heading 3"),
              m("h4", "Heading 4"),
              m("h5", "Heading 5"),
              m("h6", "Heading 6"),
              m("p.lead", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.")
            ])
          ]),
          m(".col-md-4", [
            m(".bs-component", [
              m("h2", "Example body text"),
              m("p", [
                "Nullam quis risus eget ",
                m("a[href='javascript:void(0)']", "urna mollis ornare"),
                " vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula."
              ]),
              m("p", [
                m("small", "This line of text is meant to be treated as fine print.")
              ]),
              m("p", ["The following snippet of text is ", m("strong", "rendered as bold text"), "."]),
              m("p", ["The following snippet of text is ", m("em", "rendered as italicized text"), "."]),
              m("p", ["An abbreviation of the word attribute is ", m("abbr[title='attribute']", "attr"), "."])
            ])
          ]),
          m(".col-md-4", [
            m(".bs-component", [
              m("h2", "Emphasis classes"),
              m("p.text-muted", "Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh."),
              m("p.text-primary", "Nullam id dolor id nibh ultricies vehicula ut id elit."),
              m("p.text-warning", "Etiam porta sem malesuada magna mollis euismod."),
              m("p.text-danger", "Donec ullamcorper nulla non metus auctor fringilla."),
              m("p.text-success", "Duis mollis, est non commodo luctus, nisi erat porttitor ligula."),
              m("p.text-info", "Maecenas sed diam eget risus varius blandit sit amet non magna.")
            ])
          ])
        ]),
        m(".row", [
          m(".col-md-12", [
            m("h2[id='type-blockquotes']", "Blockquotes")
          ])
        ]),
        m(".row", [
          m(".col-md-6", [
            m(".bs-component", [
              m("blockquote", [
                m("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),
                m("small", ["Someone famous in ", m("cite[title='Source Title']", "Source Title")])
              ])
            ])
          ]),
          m(".col-md-6", [
            m(".bs-component", [
              m("blockquote.pull-right", [
                m("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),
                m("small", ["Someone famous in ", m("cite[title='Source Title']", "Source Title")])
              ])
            ])
          ])
        ])
      ]),
      m(".bs-docs-section", [
        m(".row", [
          m(".col-md-12", [
            m(".page-header", [
              m("h1[id='icon']", "Icons"),
              m("p", [
                "Bootstrap Material Design supports the full range of original Material Design icons!",
                m("br"),
                m("a[href='https://www.google.com/design/icons/']", "See the full set of material design icons at the material icons library.")
              ]),
              m("p", [
                "It’s easy to incorporate icons into your web page. Here’s a small example:",
                m("br"),
                m("code", "<i class=\"material-icons\">face</i>"),
                m("i.material-icons", "face")
              ]),
              m("p", ["Please be sure that the fonts are properly setup, see ", m("a[href='https://github.com/FezVrasta/bootstrap-material-design#getting-started']", "Getting Started"), "."])
            ])
          ])
        ])
      ]),
      m(".bs-docs-section", [
        m(".row", [
          m(".col-md-12", [
            m(".page-header", [
              m("h1[id='tables']", "Tables")
            ]),
            m(".bs-component", [
              m("table.table.table-striped.table-hover.", [
                m("thead", [
                  m("tr", [
                    m("th", "#"),
                    m("th", "Column heading"),
                    m("th", "Column heading"),
                    m("th", "Column heading")
                  ])
                ]),
                m("tbody", [
                  m("tr", [
                    m("td", "1"),
                    m("td", "Column content"),
                    m("td", "Column content"),
                    m("td", "Column content")
                  ]),
                  m("tr", [
                    m("td", "2"),
                    m("td", "Column content"),
                    m("td", "Column content"),
                    m("td", "Column content")
                  ]),
                  m("tr.info", [
                    m("td", "3"),
                    m("td", "Column content"),
                    m("td", "Column content"),
                    m("td", "Column content")
                  ]),
                  m("tr.success", [
                    m("td", "4"),
                    m("td", "Column content"),
                    m("td", "Column content"),
                    m("td", "Column content")
                  ]),
                  m("tr.danger", [
                    m("td", "5"),
                    m("td", "Column content"),
                    m("td", "Column content"),
                    m("td", "Column content")
                  ]),
                  m("tr.warning", [
                    m("td", "6"),
                    m("td", "Column content"),
                    m("td", "Column content"),
                    m("td", "Column content")
                  ]),
                  m("tr.active", [
                    m("td", "7"),
                    m("td", "Column content"),
                    m("td", "Column content"),
                    m("td", "Column content")
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      m(".bs-docs-section", [
        m(".row", [
          m(".col-md-12", [
            m(".page-header", [
              m("h1[id='forms']", "Forms")
            ])
          ])
        ]),
        m(".row", [
          m(".col-md-6", [
            m(".well.bs-component", [
              m("form.form-horizontal", [
                m("fieldset", [
                  m("legend", "Legend"),
                  m(".form-group", [
                    m("label.col-md-2.control-label[for='inputEmail']", "Email"),
                    m(".col-md-10", [
                      m("input.form-control[id='inputEmail'][placeholder='Email'][type='email']")
                    ])
                  ]),
                  m(".form-group", [
                    m("label.col-md-2.control-label[for='inputPassword']", "Password"),
                    m(".col-md-10", [
                      m("input.form-control[id='inputPassword'][placeholder='Password'][type='password']")
                    ])
                  ]),
                  m(".form-group", {
                    style: {
                      "margin-top": " 0"
                    }
                  }, [
                    " ",
                    m(".col-md-offset-2.col-md-10", [
                      m(".checkbox", [
                        m("label", [
                          m("input[type='checkbox']"),
                          " Checkbox "
                        ]),
                        m("label", [
                          m("input[disabled='true'][type='checkbox']"),
                          " Disabled Checkbox "
                        ])
                      ])
                    ])
                  ]),
                  m(".form-group", [
                    m(".col-md-offset-2.col-md-10", [
                      m(".togglebutton", [
                        m("label", [
                          m("input[checked='true'][type='checkbox']"),
                          " Toggle Button "
                        ])
                      ])
                    ])
                  ]),
                  m(".form-group", [
                    m("label.col-md-2.control-label[for='inputFile']", "File"),
                    m(".col-md-10", [
                      m("input.form-control[placeholder='Browse...'][readonly=''][type='text']"),
                      m("input[id='inputFile'][multiple=''][type='file']")
                    ])
                  ]),
                  m(".form-group", [
                    m("label.col-md-2.control-label[for='textArea']", "Textarea"),
                    m(".col-md-10", [
                      m("textarea.form-control[id='textArea'][rows='3']"),
                      m("span.help-block", "A longer block of help text that breaks onto a new line and may extend beyond one line.")
                    ])
                  ]),
                  m(".form-group", [
                    m("label.col-md-2.control-label", "Radios"),
                    m(".col-md-10", [
                      m(".radio.radio-primary", [
                        m("label", [
                          m("input[checked=''][id='optionsRadios1'][name='optionsRadios'][type='radio'][value='option1']"),
                          "Option one is this"
                        ])
                      ]),
                      m(".radio.radio-primary", [
                        m("label", [
                          m("input[id='optionsRadios2'][name='optionsRadios'][type='radio'][value='option2']"),
                          "Option two can be something else"
                        ])
                      ])
                    ])
                  ]),
                  m(".form-group", [
                    m("label.col-md-2.control-label[for='select111']", "Select"),
                    m(".col-md-10", [
                      m("select.form-control[id='select111']", [
                        m("option", "1"),
                        m("option", "2"),
                        m("option", "3"),
                        m("option", "4"),
                        m("option", "5")
                      ])
                    ])
                  ]),
                  m(".form-group", [
                    m("label.col-md-2.control-label[for='select222']", "Select Multiple"),
                    m(".col-md-10", [
                      m("select.form-control[id='select222'][multiple='true']", [
                        m("option", "1"),
                        m("option", "2"),
                        m("option", "3"),
                        m("option", "4"),
                        m("option", "5")
                      ])
                    ])
                  ]),
                  m(".form-group", [
                    m(".col-md-10.col-md-offset-2", [
                      m("button.btn.btn-default[type='button']", "Cancel"),
                      m("button.btn.btn-primary[type='submit']", "Submit")
                    ])
                  ])
                ])
              ])
            ])
          ]),
          m(".col-md-4.col-md-offset-1", [
            m("form.bs-component", [
              m(".form-group.label-floating", [
                m("label.control-label[for='focusedInput1']", "Write something to make the label float"),
                m("input.form-control[id='focusedInput1'][type='text']")
              ]),
              m(".form-group.label-floating", [
                m("label.control-label[for='focusedInput2']", "Focus to show the help-block"),
                m("input.form-control[id='focusedInput2'][type='text']"),
                m("p.help-block", "You should really write something here")
              ]),
              m(".form-group", [
                m("label.control-label[for='disabledInput']", "Disabled input"),
                m("input.form-control[disabled='true'][id='disabledInput'][placeholder='Disabled input here...'][type='text']")
              ]),
              m(".form-group.has-warning", [
                m("label.control-label[for='inputWarning']", "Input warning"),
                m("input.form-control[id='inputWarning'][type='text']")
              ]),
              m(".form-group.has-error", [
                m("label.control-label[for='inputError']", "Input error"),
                m("input.form-control[id='inputError'][type='text']")
              ]),
              m(".form-group.has-success", [
                m("label.control-label[for='inputSuccess']", "Input success"),
                m("input.form-control[id='inputSuccess'][type='text']")
              ]),
              m(".form-group", [
                m("label.control-label[for='inputLarge']", "Large input"),
                m("input.form-control.input-lg[id='inputLarge'][type='text']")
              ]),
              m(".form-group", [
                m("label.control-label[for='inputDefault']", "Default input"),
                m("input.form-control[id='inputDefault'][type='text']")
              ]),
              m(".form-group", [
                m("label.control-label[for='inputSmall']", "Small input"),
                m("input.form-control.input-sm[id='inputSmall'][type='text']")
              ]),
              m(".form-group", [
                m("label.control-label[for='addon1']", "Default label w/input addons"),
                m(".input-group", [
                  m("span.input-group-addon", "$"),
                  m("input.form-control[id='addon1'][type='text']"),
                  m("span.input-group-btn", [
                    m("button.btn.btn-primary[type='button']", "Button")
                  ])
                ])
              ]),
              m(".form-group.label-floating", [
                m(".input-group", [
                  m("span.input-group-addon", "$"),
                  m("label.control-label[for='addon3a']", "Floating label w/2 addons"),
                  m("input.form-control[id='addon3a'][type='text']"),
                  m("p.help-block", ["The label is inside the ", m("code", "input-group"), " so that it is positioned properly as a placeholder."]),
                  m("span.input-group-btn", [
                    m("button.btn.btn-fab.btn-fab-mini[type='button']", [
                      m("i.material-icons", "send")
                    ])
                  ])
                ])
              ]),
              m(".form-group.label-floating", [
                m("label.control-label[for='addon2']", "Floating label w/right addon"),
                m(".input-group", [
                  m("input.form-control[id='addon2'][type='text']"),
                  m("span.input-group-btn", [
                    m("button.btn.btn-fab.btn-fab-mini[type='button']", [
                      m("i.material-icons", "functions")
                    ])
                  ])
                ])
              ]),
              m(".form-group", [
                m("input[id='inputFile4'][multiple=''][type='file']"),
                m(".input-group", [
                  m("input.form-control[placeholder='Placeholder w/file chooser...'][readonly=''][type='text']"),
                  m("span.input-group-btn.input-group-sm", [
                    m("button.btn.btn-fab.btn-fab-mini[type='button']", [
                      m("i.material-icons", "attach_file")
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      m(".bs-docs-section", [
        m(".row", [
          m(".col-md-12", [
            m(".page-header", [
              m("h1[id='nav']", "Navs")
            ])
          ])
        ]),
        m(".row", [
          m(".col-md-4", [
            m("h2[id='nav-tabs']", "Tabs"),
            m(".bs-component", [
              m("ul.nav.nav-tabs", {
                style: {
                  "margin-bottom": " 15px"
                }
              }, [
                m("li.active", [m("a[data-toggle='tab'][href='#home']", "Home")]),
                m("li", [m("a[data-toggle='tab'][href='#profile']", "Profile")]),
                m("li.disabled", [m("a", "Disabled")]),
                m("li.dropdown", [
                  m("a.dropdown-toggle[data-target='#'][data-toggle='dropdown'][href='bootstrap-elements.html']", [
                    "Dropdown",
                    m("span.caret")
                  ]),
                  m("ul.dropdown-menu", [
                    m("li", [m("a[data-toggle='tab'][href='#dropdown1']", "Action")]),
                    m("li.divider"),
                    m("li", [m("a[data-toggle='tab'][href='#dropdown2']", "Another action")])
                  ])
                ])
              ]),
              m(".tab-content[id='myTabContent']", [
                m(".tab-pane.fade.active.in[id='home']", [
                  m("p", "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.")
                ]),
                m(".tab-pane.fade[id='profile']", [
                  m("p", "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.")
                ]),
                m(".tab-pane.fade[id='dropdown1']", [
                  m("p", "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.")
                ]),
                m(".tab-pane.fade[id='dropdown2']", [
                  m("p", "Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater.")
                ])
              ])
            ])
          ]),
          m(".col-md-4", [
            m("h2[id='nav-pills']", "Pills"),
            m(".bs-component", [
              m("ul.nav.nav-pills", [
                m("li.active", [m("a[href='javascript:void(0)']", "Home")]),
                m("li", [m("a[href='javascript:void(0)']", "Profile")]),
                m("li.disabled", [m("a[href='javascript:void(0)']", "Disabled")]),
                m("li.dropdown", [
                  m("a.dropdown-toggle[data-target='#'][data-toggle='dropdown'][href='bootstrap-elements.html']", [
                    "Dropdown",
                    m("span.caret")
                  ]),
                  m("ul.dropdown-menu", [
                    m("li", [m("a[href='javascript:void(0)']", "Action")]),
                    m("li", [m("a[href='javascript:void(0)']", "Another action")]),
                    m("li", [m("a[href='javascript:void(0)']", "Something else here")]),
                    m("li.divider"),
                    m("li", [m("a[href='javascript:void(0)']", "Separated link")])
                  ])
                ])
              ])
            ]),
            m("br"),
            m(".bs-component", [
              m("ul.nav.nav-pills.nav-stacked", {
                style: {
                  "max-width": " 300px"
                }
              }, [
                m("li.active", [m("a[href='javascript:void(0)']", "Home")]),
                m("li", [m("a[href='javascript:void(0)']", "Profile")]),
                m("li.disabled", [m("a[href='javascript:void(0)']", "Disabled")]),
                m("li.dropdown", [
                  m("a.dropdown-toggle[data-target='#'][data-toggle='dropdown'][href='bootstrap-elements.html']", [
                    "Dropdown",
                    m("span.caret")
                  ]),
                  m("ul.dropdown-menu", [
                    m("li", [m("a[href='javascript:void(0)']", "Action")]),
                    m("li", [m("a[href='javascript:void(0)']", "Another action")]),
                    m("li", [m("a[href='javascript:void(0)']", "Something else here")]),
                    m("li.divider"),
                    m("li", [m("a[href='javascript:void(0)']", "Separated link")])
                  ])
                ])
              ])
            ])
          ]),
          m(".col-md-4", [
            m("h2[id='nav-breadcrumbs']", "Breadcrumbs"),
            m(".bs-component", [
              m("ul.breadcrumb", [
                m("li.active", "Home")
              ]),
              m("ul.breadcrumb", [
                m("li", [m("a[href='javascript:void(0)']", "Home")]),
                m("li.active", "Library")
              ]),
              m("ul.breadcrumb", {
                style: {
                  "margin-bottom": " 5px"
                }
              }, [
                m("li", [m("a[href='javascript:void(0)']", "Home")]),
                m("li", [m("a[href='javascript:void(0)']", "Library")]),
                m("li.active", "Data")
              ])
            ])
          ])
        ]),
        m(".row", [
          m(".col-md-4", [
            m("h2[id='pagination']", "Pagination"),
            m(".bs-component", [
              m("ul.pagination", [
                m("li.disabled", [m("a[href='javascript:void(0)']", "«")]),
                m("li.active", [m("a[href='javascript:void(0)']", "1")]),
                m("li", [m("a[href='javascript:void(0)']", "2")]),
                m("li", [m("a[href='javascript:void(0)']", "3")]),
                m("li", [m("a[href='javascript:void(0)']", "4")]),
                m("li", [m("a[href='javascript:void(0)']", "5")]),
                m("li", [m("a[href='javascript:void(0)']", "»")])
              ]),
              m("ul.pagination.pagination-lg", [
                m("li.disabled", [m("a[href='javascript:void(0)']", "«")]),
                m("li.active", [m("a[href='javascript:void(0)']", "1")]),
                m("li", [m("a[href='javascript:void(0)']", "2")]),
                m("li", [m("a[href='javascript:void(0)']", "3")]),
                m("li", [m("a[href='javascript:void(0)']", "»")])
              ]),
              m("ul.pagination.pagination-sm", [
                m("li.disabled", [m("a[href='javascript:void(0)']", "«")]),
                m("li.active", [m("a[href='javascript:void(0)']", "1")]),
                m("li", [m("a[href='javascript:void(0)']", "2")]),
                m("li", [m("a[href='javascript:void(0)']", "3")]),
                m("li", [m("a[href='javascript:void(0)']", "4")]),
                m("li", [m("a[href='javascript:void(0)']", "5")]),
                m("li", [m("a[href='javascript:void(0)']", "»")])
              ])
            ])
          ]),
          m(".col-md-4", [
            m("h2[id='pager']", "Pager"),
            m(".bs-component", [
              m("ul.pager", [
                m("li", [m("a.withripple[href='javascript:void(0)']", "Previous")]),
                m("li", [m("a.withripple[href='javascript:void(0)']", "Next")])
              ]),
              m("ul.pager", [
                m("li.previous.disabled", [m("a[href='javascript:void(0)']", "← Older")]),
                m("li.next", [m("a.withripple[href='javascript:void(0)']", "Newer →")])
              ])
            ])
          ]),
          m(".col-md-4", [

          ])
        ])
      ]),
      m(".bs-docs-section", [
        m(".row", [
          m(".col-md-12", [
            m(".page-header", [
              m("h1[id='indicators']", "Indicators")
            ])
          ])
        ]),
        m(".row", [
          m(".col-md-12", [
            m("h2", "Alerts"),
            m(".bs-component", [
              m(".alert.alert-dismissible.alert-warning", [
                m("button.close[data-dismiss='alert'][type='button']", "×"),
                m("h4", "Warning!"),
                m("p", [
                  "Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, ",
                  m("a.alert-link[href='javascript:void(0)']", "vel scelerisque nisl consectetur et"),
                  "."
                ])
              ])
            ])
          ])
        ]),
        m(".row", [
          m(".col-md-4", [
            m(".bs-component", [
              m(".alert.alert-dismissible.alert-danger", [
                m("button.close[data-dismiss='alert'][type='button']", "×"),
                m("strong", "Oh snap! "),
                m("a.alert-link[href='javascript:void(0)']", "Change a few things up"),
                " and try submitting again."
              ])
            ])
          ]),
          m(".col-md-4", [
            m(".bs-component", [
              m(".alert.alert-dismissible.alert-success", [
                m("button.close[data-dismiss='alert'][type='button']", "×"),
                m("strong", "Well done!"),
                " You successfully read ",
                m("a.alert-link[href='javascript:void(0)']", "this important alert message")
              ])
            ])
          ]),
          m(".col-md-4", [
            m(".bs-component", [
              m(".alert.alert-dismissible.alert-info", [
                m("button.close[data-dismiss='alert'][type='button']", "×"),
                m("strong", "Heads up!"),
                " This ",
                m("a.alert-link[href='javascript:void(0)']", "alert needs your attention"),
                ", but it's not super important."
              ])
            ])
          ])
        ]),
        m(".row", [
          m(".col-md-4", [
            m("h2", "Labels"),
            m(".bs-component", {
              style: {
                "margin-bottom": " 40px"
              }
            }, [
              m("span.label.label-default", "Default"),
              m("span.label.label-primary", "Primary"),
              m("span.label.label-success", "Success"),
              m("span.label.label-warning", "Warning"),
              m("span.label.label-danger", "Danger"),
              m("span.label.label-info", "Info")
            ])
          ]),
          m(".col-md-4", [
            m("h2", "Badges"),
            m(".bs-component", [
              m("ul.nav.nav-pills", [
                m("li.active", [m("a[href='javascript:void(0)']", ["Home ", m("span.badge", "42")])]),
                m("li", [m("a[href='javascript:void(0)']", ["Profile ", m("span.badge")])]),
                m("li", [m("a[href='javascript:void(0)']", ["Messages ", m("span.badge", "3")])])
              ])
            ])
          ])
        ])
      ]),
      m(".bs-docs-section", [
        m(".row", [
          m(".col-md-12", [
            m(".page-header", [
              m("h1[id='progress']", "Progress bars")
            ]),
            m("h3[id='progress-basic']", "Basic"),
            m(".bs-component", [
              m(".progress", [
                m(".progress-bar", {
                  style: {
                    "width": " 60%"
                  }
                })
              ])
            ]),
            m("h3[id='progress-alternatives']", "Contextual alternatives"),
            m(".bs-component", [
              m(".progress", [
                m(".progress-bar.progress-bar-info", {
                  style: {
                    "width": " 20%"
                  }
                })
              ]),
              m(".progress", [
                m(".progress-bar.progress-bar-success", {
                  style: {
                    "width": " 40%"
                  }
                })
              ]),
              m(".progress", [
                m(".progress-bar.progress-bar-warning", {
                  style: {
                    "width": " 60%"
                  }
                })
              ]),
              m(".progress", [
                m(".progress-bar.progress-bar-danger", {
                  style: {
                    "width": " 80%"
                  }
                })
              ])
            ]),
            m("h3[id='progress-striped']", "Striped"),
            m(".bs-component", [
              m(".progress.progress-striped", [
                m(".progress-bar.progress-bar-info", {
                  style: {
                    "width": " 20%"
                  }
                })
              ]),
              m(".progress.progress-striped", [
                m(".progress-bar.progress-bar-success", {
                  style: {
                    "width": " 40%"
                  }
                })
              ]),
              m(".progress.progress-striped", [
                m(".progress-bar.progress-bar-warning", {
                  style: {
                    "width": " 60%"
                  }
                })
              ]),
              m(".progress.progress-striped", [
                m(".progress-bar.progress-bar-danger", {
                  style: {
                    "width": " 80%"
                  }
                })
              ])
            ]),
            m("h3[id='progress-animated']", "Animated"),
            m(".bs-component", [
              m(".progress.progress-striped.active", [
                m(".progress-bar", {
                  style: {
                    "width": " 45%"
                  }
                })
              ])
            ]),
            m("h3[id='progress-stacked']", "Stacked"),
            m(".bs-component", [
              m(".progress", [
                m(".progress-bar.progress-bar-success", {
                  style: {
                    "width": " 35%"
                  }
                }),
                m(".progress-bar.progress-bar-warning", {
                  style: {
                    "width": " 20%"
                  }
                }),
                m(".progress-bar.progress-bar-danger", {
                  style: {
                    "width": " 10%"
                  }
                })
              ])
            ])
          ])
        ])
      ]),
      m(".bs-docs-section", [
        m(".row", [
          m(".col-md-12", [
            m(".page-header", [
              m("h1[id='slider']", ["Sliders ", m("span", {
                style: {
                  "font-size": " 50%"
                }
              }, " (with noUiSlider)")])
            ]),
            m(".bs-component", [
              m(".row", [
                m(".col-sm-6", [
                  m(".slider.shor"),
                  m(".slider.shor.slider-success"),
                  m(".slider.shor.slider-material-pink")
                ]),
                m(".col-sm-6", {
                  style: {
                    "height": " 150px"
                  }
                }, [
                  m(".slider.svert"),
                  m(".slider.svert.slider-success"),
                  m(".slider.svert.slider-material-pink")
                ])
              ])
            ]),
            m("p", ["Read more about ", m("a[href='http://refreshless.com/nouislider/']", "noUiSlider here"), "."])
          ])
        ])
      ]),
      m(".bs-docs-section", [
        m(".row", [
          m(".col-md-12", [
            m(".page-header", [
              m("h1[id='container']", "Containers")
            ]),
            m(".bs-component", [
              m(".jumbotron", [
                m("h1", "Jumbotron"),
                m("p", "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."),
                m("p", [m("a.btn.btn-primary.btn-lg", "Learn more")])
              ])
            ])
          ])
        ]),
        m(".row", [
          m(".col-md-12", [
            m("h2", "List groups")
          ])
        ]),
        m(".row", [
          m(".col-md-4", [
            m(".bs-component", [
              m(".list-group", [
                m(".list-group-item", [
                  m(".row-action-primary", [
                    m("i.material-icons", "folder")
                  ]),
                  m(".row-content", [
                    m(".least-content", "15m"),
                    m("h4.list-group-item-heading", "Tile with a label"),
                    m("p.list-group-item-text", "Donec id elit non mi porta gravida at eget metus.")
                  ])
                ]),
                m(".list-group-separator"),
                m(".list-group-item", [
                  m(".row-action-primary", [
                    m("i.material-icons", "folder")
                  ]),
                  m(".row-content", [
                    m(".least-content", "10m"),
                    m("h4.list-group-item-heading", "Tile with a label"),
                    m("p.list-group-item-text", "Maecenas sed diam eget risus varius blandit.")
                  ])
                ]),
                m(".list-group-separator"),
                m(".list-group-item", [
                  m(".row-action-primary", [
                    m("i.material-icons", "folder")
                  ]),
                  m(".row-content", [
                    m(".least-content", "8m"),
                    m("h4.list-group-item-heading", "Tile with a label"),
                    m("p.list-group-item-text", "Maecenas sed diam eget risus varius blandit.")
                  ])
                ]),
                m(".list-group-separator")
              ])
            ])
          ]),
          m(".col-md-4", [
            m(".bs-component", [
              m(".list-group", [
                m(".list-group-item", [
                  m(".row-action-primary", [
                    m("i.material-icons", "folder")
                  ]),
                  m(".row-content", [
                    m(".action-secondary", [m("i.material-icons", "info")]),
                    m("h4.list-group-item-heading", "Tile with an icon"),
                    m("p.list-group-item-text", "Donec id elit non mi porta gravida at eget metus.")
                  ])
                ]),
                m(".list-group-separator"),
                m(".list-group-item", [
                  m(".row-action-primary", [
                    m("i.material-icons", "folder")
                  ]),
                  m(".row-content", [
                    m(".action-secondary", [m("i.material-icons", "info")]),
                    m("h4.list-group-item-heading", "Tile with an icon"),
                    m("p.list-group-item-text", "Maecenas sed diam eget risus varius blandit.")
                  ])
                ]),
                m(".list-group-separator"),
                m(".list-group-item", [
                  m(".row-action-primary", [
                    m("i.material-icons", "folder")
                  ]),
                  m(".row-content", [
                    m(".action-secondary", [m("i.material-icons", "info")]),
                    m("h4.list-group-item-heading", "Tile with an icon"),
                    m("p.list-group-item-text", "Maecenas sed diam eget risus varius blandit.")
                  ])
                ]),
                m(".list-group-separator")
              ])
            ])
          ]),
          m(".col-md-4", [
            m(".bs-component", [
              m(".list-group", [
                m(".list-group-item", [
                  m(".row-picture", [
                    m("img.circle[alt='icon'][src='http://lorempixel.com/56/56/people/1']")
                  ]),
                  m(".row-content", [
                    m("h4.list-group-item-heading", "Tile with avatar"),
                    m("p.list-group-item-text", "Donec id elit non mi porta gravida at eget metus")
                  ])
                ]),
                m(".list-group-separator"),
                m(".list-group-item", [
                  m(".row-picture", [
                    m("img.circle[alt='icon'][src='http://lorempixel.com/56/56/people/6']")
                  ]),
                  m(".row-content", [
                    m("h4.list-group-item-heading", "Tile with another avatar"),
                    m("p.list-group-item-text", "Maecenas sed diam eget risus varius blandit.")
                  ])
                ]),
                m(".list-group-separator"),
                m(".list-group-item", [
                  m(".row-action-primary.checkbox", [
                    m("label", [m("input[type='checkbox']")])
                  ]),
                  m(".row-content", [
                    m("h4.list-group-item-heading", "Tile with a checkbox in it"),
                    m("p.list-group-item-text", "Donec id elit non mi risus varius blandit.")
                  ])
                ]),
                m(".list-group-separator")
              ])
            ])
          ])
        ]),
        m(".row", [
          m(".col-md-12", [
            m("h2", "Panels")
          ])
        ]),
        m(".row", [
          m(".col-md-4", [
            m(".bs-component", [
              m(".panel.panel-default", [
                m(".panel-body", [
                  "Panel content"
                ])
              ]),
              m(".panel.panel-default", [
                m(".panel-heading", "Panel heading"),
                m(".panel-body", [
                  "Panel content"
                ])
              ]),
              m(".panel.panel-default", [
                m(".panel-body", [
                  "Panel content"
                ]),
                m(".panel-footer", "Panel footer")
              ])
            ])
          ]),
          m(".col-md-4", [
            m(".bs-component", [
              m(".panel.panel-primary", [
                m(".panel-heading", [
                  m("h3.panel-title", "Panel primary")
                ]),
                m(".panel-body", [
                  "Panel content"
                ])
              ]),
              m(".panel.panel-success", [
                m(".panel-heading", [
                  m("h3.panel-title", "Panel success")
                ]),
                m(".panel-body", [
                  "Panel content"
                ])
              ]),
              m(".panel.panel-warning", [
                m(".panel-heading", [
                  m("h3.panel-title", "Panel warning")
                ]),
                m(".panel-body", [
                  "Panel content"
                ])
              ])
            ])
          ]),
          m(".col-md-4", [
            m(".bs-component", [
              m(".panel.panel-danger", [
                m(".panel-heading", [
                  m("h3.panel-title", "Panel danger")
                ]),
                m(".panel-body", [
                  "Panel content"
                ])
              ]),
              m(".panel.panel-info", [
                m(".panel-heading", [
                  m("h3.panel-title", "Panel info")
                ]),
                m(".panel-body", [
                  "Panel content"
                ])
              ])
            ])
          ])
        ]),
        m(".row", [
          m(".col-md-12", [
            m("h2", "Wells")
          ])
        ]),
        m(".row", [
          m(".col-md-4", [
            m(".bs-component", [
              m(".well", [
                "Look, I'm in a well!"
              ])
            ])
          ]),
          m(".col-md-4", [
            m(".bs-component", [
              m(".well.well-sm", [
                "Look, I'm in a small well!"
              ])
            ])
          ]),
          m(".col-md-4", [
            m(".bs-component", [
              m(".well.well-lg", [
                "Look, I'm in a large well!"
              ])
            ])
          ])
        ])
      ]),
      m(".bs-docs-section", [
        m(".row", [
          m(".col-md-12", [
            m(".page-header", [
              m("h1[id='dialogs']", "Dialogs")
            ])
          ])
        ]),
        m(".row", [
          m(".col-md-6", [
            m("h2", "Modals"),
            m(".bs-component", [
              m(".modal", [
                m(".modal-dialog", [
                  m(".modal-content", [
                    m(".modal-header", [
                      m("button.close[aria-hidden='true'][data-dismiss='modal'][type='button']", "×"),
                      m("h4.modal-title", "Modal title")
                    ]),
                    m(".modal-body", [
                      m("p", "One fine body…")
                    ]),
                    m(".modal-footer", [
                      m("button.btn.btn-default[data-dismiss='modal'][type='button']", "Close"),
                      m("button.btn.btn-primary[type='button']", "Save changes")
                    ])
                  ])
                ])
              ])
            ])
          ]),
          m(".col-md-6", [
            m("h2", "Popovers"),
            m(".bs-component", [
              m("button.btn.btn-default[data-container='body'][data-content='Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'][data-placement='left'][data-toggle='popover'][type='button']", "Left"),
              m("button.btn.btn-default[data-container='body'][data-content='Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'][data-placement='top'][data-toggle='popover'][type='button']", "Top"),
              m("button.btn.btn-default[data-container='body'][data-content='Vivamussagittis lacus vel augue laoreet rutrum faucibus.'][data-placement='bottom'][data-toggle='popover'][type='button ']", "Bottom"),
              m("button.btn.btn-default[data-container='body'][data-content='Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'][data-placement='right'][data-toggle='popover'][type='button']", "Right")
            ]),
            m("h2", "Tooltips"),
            m(".bs-component", [
              m("button.btn.btn-default[data-original-title='Tooltip on left'][data-placement='left'][data-toggle='tooltip'][title=''][type='button']", "Left"),
              m("button.btn.btn-default[data-original-title='Tooltip on top'][data-placement='top'][data-toggle='tooltip'][title=''][type='button']", "Top"),
              m("button.btn.btn-default[data-original-title='Tooltip on bottom'][data-placement='bottom'][data-toggle='tooltip'][title=''][type='button']", "Bottom"),
              m("button.btn.btn-default[data-original-title='Tooltip on right'][data-placement='right'][data-toggle='tooltip'][title=''][type='button']", "Right")
            ])
          ])
        ]),
        m(".row", [
          m(".col-md-6", [
            m("h2", ["Snackbars and toasts ", m("span", {
              style: {
                "font-size": " 50%"
              }
            }, " (with SnackbarJS)")]),
            m("p", [
              "SnackbarJS is the ad-hoc developed plugin to create snackbars and toasts, read more about it on the ",
              m("a[href='http://fezvrasta.github.io/snackbarjs/']", "official page"),
              " of the project."
            ]),
            m(".bs-component", [
              m("button.btn.btn-default[data-content='This is a snackbar! Lorem lipsum dolor sit amet...'][data-timeout='0'][data-toggle='snackbar'][type='button']", "Show snackbar"),
              m("button.btn.btn-default[data-content='This is a toast! Lorem lipsum dolor sit amet...'][data-style='toast'][data-timeout='0'][data-toggle='snackbar'][type='button']", "Show toast")
            ])
          ])
        ])
      ]),
      m(".modal.fade[id='source-modal'][tabindex='-1']", [
        m(".modal-dialog.modal-lg", [
          m(".modal-content", [
            m(".modal-header", [
              m("button.close[aria-hidden='true'][data-dismiss='modal'][type='button']", "×"),
              m("h4.modal-title", "Source Code")
            ]),
            m(".modal-body", [
              m("pre")
            ])
          ])
        ])
      ])
    ]);
  }
};

module.exports = ExamplesWidget;
