(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{736:function(l,b,c){"use strict";c.r(b);var g=c(0),o=Object(g.a)({},(function(){var l=this,b=l.$createElement,c=l._self._c||b;return c("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[c("h2",{attrs:{id:"applications"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#applications"}},[l._v("#")]),l._v(" Applications")]),l._v(" "),c("p",[c("strong",[l._v("Implementing a custom IBC application")])]),l._v(" "),c("p",[l._v("You can see that the application callbacks are coming from a "),c("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/05-port/types/router.go",target:"_blank",rel:"noopener noreferrer"}},[l._v("router"),c("OutboundLink")],1),l._v(":")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gR2V0Um91dGUgcmV0dXJucyBhIElCQ01vZHVsZSBmb3IgYSBnaXZlbiBtb2R1bGUuCmZ1bmMgKHJ0ciAqUm91dGVyKSBHZXRSb3V0ZShtb2R1bGUgc3RyaW5nKSAoSUJDTW9kdWxlLCBib29sKSB7CiAgaWYgIXJ0ci5IYXNSb3V0ZShtb2R1bGUpIHsKICAgIHJldHVybiBuaWwsIGZhbHNlCiAgfQogIHJldHVybiBydHIucm91dGVzW21vZHVsZV0sIHRydWUKfQo="}}),l._v(" "),c("p",[l._v("This returns an implementation of the "),c("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/05-port/types/module.go",target:"_blank",rel:"noopener noreferrer"}},[l._v("IBC Module Interface"),c("OutboundLink")],1),l._v(":")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gSUJDTW9kdWxlIGRlZmluZXMgYW4gaW50ZXJmYWNlIHRoYXQgaW1wbGVtZW50cyBhbGwgdGhlIGNhbGxiYWNrcwovLyB0aGF0IG1vZHVsZXMgbXVzdCBkZWZpbmUgYXMgc3BlY2lmaWVkIGluIElDUy0yNgp0eXBlIElCQ01vZHVsZSBpbnRlcmZhY2UgewogIC8vIE9uQ2hhbk9wZW5Jbml0IHdpbGwgdmVyaWZ5IHRoYXQgdGhlIHJlbGF5ZXItY2hvc2VuIHBhcmFtZXRlcnMgYXJlCiAgLy8gdmFsaWQgYW5kIHBlcmZvcm0gYW55IGN1c3RvbSBJTklUIGxvZ2ljLkl0IG1heSByZXR1cm4gYW4gZXJyb3IgaWYKICAvLyB0aGUgY2hvc2VuIHBhcmFtZXRlcnMgYXJlIGludmFsaWQgaW4gd2hpY2ggY2FzZSB0aGUgaGFuZHNoYWtlIGlzIGFib3J0ZWQuCiAgLy8gT25DaGFuT3BlbkluaXQgc2hvdWxkIHJldHVybiBhbiBlcnJvciBpZiB0aGUgcHJvdmlkZWQgdmVyc2lvbiBpcyBpbnZhbGlkLgogIE9uQ2hhbk9wZW5Jbml0KAogICAgY3R4IHNkay5Db250ZXh0LAogICAgb3JkZXIgY2hhbm5lbHR5cGVzLk9yZGVyLAogICAgY29ubmVjdGlvbkhvcHMgW11zdHJpbmcsCiAgICBwb3J0SUQgc3RyaW5nLAogICAgY2hhbm5lbElEIHN0cmluZywKICAgIGNoYW5uZWxDYXAgKmNhcGFiaWxpdHl0eXBlcy5DYXBhYmlsaXR5LAogICAgY291bnRlcnBhcnR5IGNoYW5uZWx0eXBlcy5Db3VudGVycGFydHksCiAgICB2ZXJzaW9uIHN0cmluZywKICApIGVycm9yCgo="}}),l._v(" "),c("p",[l._v("Here you can find all the callbacks your application needs to implement. So, in the "),c("code",[l._v("msg_serve.go")]),l._v(" you can find the following in the "),c("code",[l._v("ChannelOpenInit")]),l._v(":")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICAvLyBQZXJmb3JtIGFwcGxpY2F0aW9uIGxvZ2ljIGNhbGxiYWNrCiAgaWYgZXJyID0gY2JzLk9uQ2hhbk9wZW5Jbml0KGN0eCwgbXNnLkNoYW5uZWwuT3JkZXJpbmcsIG1zZy5DaGFubmVsLkNvbm5lY3Rpb25Ib3BzLCBtc2cuUG9ydElkLCBjaGFubmVsSUQsIGNhcCwgbXNnLkNoYW5uZWwuQ291bnRlcnBhcnR5LCBtc2cuQ2hhbm5lbC5WZXJzaW9uKTsgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gbmlsLCBzZGtlcnJvcnMuV3JhcChlcnIsICZxdW90O2NoYW5uZWwgb3BlbiBpbml0IGNhbGxiYWNrIGZhaWxlZCZxdW90OykKICB9Cg=="}}),l._v(" "),c("p",[l._v("This calls custom logic of the application. The situation is similar for "),c("code",[l._v("OnChanOpenTry")]),l._v(", "),c("code",[l._v("OnChanOpenAck")]),l._v(", "),c("code",[l._v("OnChanOpenConfirm")]),l._v(", etc., in the "),c("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/05-port/types/module.go",target:"_blank",rel:"noopener noreferrer"}},[l._v("IBC Module Interface"),c("OutboundLink")],1),l._v(":")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICAvLyBPbkNoYW5PcGVuVHJ5IHdpbGwgdmVyaWZ5IHRoZSByZWxheWVyLWNob3NlbiBwYXJhbWV0ZXJzIGFsb25nIHdpdGggdGhlCiAgLy8gY291bnRlcnBhcnR5LWNob3NlbiB2ZXJzaW9uIHN0cmluZyBhbmQgcGVyZm9ybSBjdXN0b20gVFJZIGxvZ2ljLgogIC8vIElmIHRoZSByZWxheWVyLWNob3NlbiBwYXJhbWV0ZXJzIGFyZSBpbnZhbGlkLCB0aGUgY2FsbGJhY2sgbXVzdCByZXR1cm4KICAvLyBhbiBlcnJvciB0byBhYm9ydCB0aGUgaGFuZHNoYWtlLiBJZiB0aGUgY291bnRlcnBhcnR5LWNob3NlbiB2ZXJzaW9uIGlzIG5vdAogIC8vIGNvbXBhdGlibGUgd2l0aCB0aGlzIG1vZHVsZXMgc3VwcG9ydGVkIHZlcnNpb25zLCB0aGUgY2FsbGJhY2sgbXVzdCByZXR1cm4KICAvLyBhbiBlcnJvciB0byBhYm9ydCB0aGUgaGFuZHNoYWtlLiBJZiB0aGUgdmVyc2lvbnMgYXJlIGNvbXBhdGlibGUsIHRoZSB0cnkgY2FsbGJhY2sKICAvLyBtdXN0IHNlbGVjdCB0aGUgZmluYWwgdmVyc2lvbiBzdHJpbmcgYW5kIHJldHVybiBpdCB0byBjb3JlIElCQy4KICAvLyBPbkNoYW5PcGVuVHJ5IG1heSBhbHNvIHBlcmZvcm0gY3VzdG9tIGluaXRpYWxpemF0aW9uIGxvZ2ljCiAgT25DaGFuT3BlblRyeSgKICAgIGN0eCBzZGsuQ29udGV4dCwKICAgIG9yZGVyIGNoYW5uZWx0eXBlcy5PcmRlciwKICAgIGNvbm5lY3Rpb25Ib3BzIFtdc3RyaW5nLAogICAgcG9ydElELAogICAgY2hhbm5lbElEIHN0cmluZywKICAgIGNoYW5uZWxDYXAgKmNhcGFiaWxpdHl0eXBlcy5DYXBhYmlsaXR5LAogICAgY291bnRlcnBhcnR5IGNoYW5uZWx0eXBlcy5Db3VudGVycGFydHksCiAgICBjb3VudGVycGFydHlWZXJzaW9uIHN0cmluZywKICApICh2ZXJzaW9uIHN0cmluZywgZXJyIGVycm9yKQoKICAvLyBPbkNoYW5PcGVuQWNrIHdpbGwgZXJyb3IgaWYgdGhlIGNvdW50ZXJwYXJ0eSBzZWxlY3RlZCB2ZXJzaW9uIHN0cmluZwogIC8vIGlzIGludmFsaWQgdG8gYWJvcnQgdGhlIGhhbmRzaGFrZS4gSXQgbWF5IGFsc28gcGVyZm9ybSBjdXN0b20gQUNLIGxvZ2ljLgogIE9uQ2hhbk9wZW5BY2soCiAgICBjdHggc2RrLkNvbnRleHQsCiAgICBwb3J0SUQsCiAgICBjaGFubmVsSUQgc3RyaW5nLAogICAgY291bnRlcnBhcnR5Q2hhbm5lbElEIHN0cmluZywKICAgIGNvdW50ZXJwYXJ0eVZlcnNpb24gc3RyaW5nLAogICkgZXJyb3IKCiAgLy8gT25DaGFuT3BlbkNvbmZpcm0gd2lsbCBwZXJmb3JtIGN1c3RvbSBDT05GSVJNIGxvZ2ljIGFuZCBtYXkgZXJyb3IgdG8gYWJvcnQgdGhlIGhhbmRzaGFrZS4KICBPbkNoYW5PcGVuQ29uZmlybSgKICAgIGN0eCBzZGsuQ29udGV4dCwKICAgIHBvcnRJRCwKICAgIGNoYW5uZWxJRCBzdHJpbmcsCiAgKSBlcnJvcgoKLi4uCg=="}}),l._v(" "),c("p",[l._v("You will learn about applications soon, but the take away here is that an application developer will need to implement the "),c("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/05-port/types/module.go",target:"_blank",rel:"noopener noreferrer"}},[l._v("IBC Module Interface"),c("OutboundLink")],1),l._v(".")])],1)}),[],!1,null,null,null);b.default=o.exports}}]);