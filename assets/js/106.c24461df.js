(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{769:function(e,c,o){"use strict";o.r(c);var t=o(0),l=Object(t.a)({},(function(){var e=this,c=e.$createElement,o=e._self._c||c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"nameservice-module-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nameservice-module-cli"}},[e._v("#")]),e._v(" Nameservice Module CLI")]),e._v(" "),o("p",[e._v("The Cosmos SDK uses the "),o("a",{attrs:{href:"https://github.com/spf13/cobra",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("cobra")]),o("OutboundLink")],1),e._v(" library for CLI interactions. This library makes it easy for each module to expose its own commands. The "),o("code",[e._v("type")]),e._v(" command should have scaffolded the following files for us -")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("./x/nameservice/client/cli/queryWhois.go")])]),e._v(" "),o("li",[o("code",[e._v("./x/nameservice/client/cli/txWhois.go")])])]),e._v(" "),o("h2",{attrs:{id:"queries"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#queries"}},[e._v("#")]),e._v(" Queries")]),e._v(" "),o("p",[e._v("Start in "),o("code",[e._v("queryWhois.go")]),e._v(". Here, define "),o("code",[e._v("cobra.Command")]),e._v("s for each of your modules "),o("code",[e._v("Queriers")]),e._v(" ("),o("code",[e._v("resolve")]),e._v(", and "),o("code",[e._v("whois")]),e._v("):")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBjbGkKCmltcG9ydCAoCgkmcXVvdDtmbXQmcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2NsaWVudC9jb250ZXh0JnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2NvZGVjJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL3NwZjEzL2NvYnJhJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL3VzZXIvbmFtZXNlcnZpY2UveC9uYW1lc2VydmljZS90eXBlcyZxdW90OwopCgpmdW5jIEdldENtZExpc3RXaG9pcyhxdWVyeVJvdXRlIHN0cmluZywgY2RjICpjb2RlYy5Db2RlYykgKmNvYnJhLkNvbW1hbmQgewoJcmV0dXJuICZhbXA7Y29icmEuQ29tbWFuZHsKCQlVc2U6ICAgJnF1b3Q7bGlzdC13aG9pcyZxdW90OywKCQlTaG9ydDogJnF1b3Q7bGlzdCBhbGwgd2hvaXMmcXVvdDssCgkJUnVuRTogZnVuYyhjbWQgKmNvYnJhLkNvbW1hbmQsIGFyZ3MgW11zdHJpbmcpIGVycm9yIHsKCQkJY2xpQ3R4IDo9IGNvbnRleHQuTmV3Q0xJQ29udGV4dCgpLldpdGhDb2RlYyhjZGMpCgkJCXJlcywgXywgZXJyIDo9IGNsaUN0eC5RdWVyeVdpdGhEYXRhKGZtdC5TcHJpbnRmKCZxdW90O2N1c3RvbS8lcy8lcyZxdW90OywgcXVlcnlSb3V0ZSwgdHlwZXMuUXVlcnlMaXN0V2hvaXMpLCBuaWwpCgkJCWlmIGVyciAhPSBuaWwgewoJCQkJZm10LlByaW50ZigmcXVvdDtjb3VsZCBub3QgbGlzdCBXaG9pc1xuJXNcbiZxdW90OywgZXJyLkVycm9yKCkpCgkJCQlyZXR1cm4gbmlsCgkJCX0KCQkJdmFyIG91dCBbXXR5cGVzLldob2lzCgkJCWNkYy5NdXN0VW5tYXJzaGFsSlNPTihyZXMsICZhbXA7b3V0KQoJCQlyZXR1cm4gY2xpQ3R4LlByaW50T3V0cHV0KG91dCkKCQl9LAoJfQp9CgpmdW5jIEdldENtZEdldFdob2lzKHF1ZXJ5Um91dGUgc3RyaW5nLCBjZGMgKmNvZGVjLkNvZGVjKSAqY29icmEuQ29tbWFuZCB7CglyZXR1cm4gJmFtcDtjb2JyYS5Db21tYW5kewoJCVVzZTogICAmcXVvdDtnZXQtd2hvaXMgW2tleV0mcXVvdDssCgkJU2hvcnQ6ICZxdW90O1F1ZXJ5IGEgd2hvaXMgYnkga2V5JnF1b3Q7LAoJCUFyZ3M6ICBjb2JyYS5FeGFjdEFyZ3MoMSksCgkJUnVuRTogZnVuYyhjbWQgKmNvYnJhLkNvbW1hbmQsIGFyZ3MgW11zdHJpbmcpIGVycm9yIHsKCQkJY2xpQ3R4IDo9IGNvbnRleHQuTmV3Q0xJQ29udGV4dCgpLldpdGhDb2RlYyhjZGMpCgkJCWtleSA6PSBhcmdzWzBdCgoJCQlyZXMsIF8sIGVyciA6PSBjbGlDdHguUXVlcnlXaXRoRGF0YShmbXQuU3ByaW50ZigmcXVvdDtjdXN0b20vJXMvJXMvJXMmcXVvdDssIHF1ZXJ5Um91dGUsIHR5cGVzLlF1ZXJ5R2V0V2hvaXMsIGtleSksIG5pbCkKCQkJaWYgZXJyICE9IG5pbCB7CgkJCQlmbXQuUHJpbnRmKCZxdW90O2NvdWxkIG5vdCByZXNvbHZlIHdob2lzICVzIFxuJXNcbiZxdW90Oywga2V5LCBlcnIuRXJyb3IoKSkKCgkJCQlyZXR1cm4gbmlsCgkJCX0KCgkJCXZhciBvdXQgdHlwZXMuV2hvaXMKCQkJY2RjLk11c3RVbm1hcnNoYWxKU09OKHJlcywgJmFtcDtvdXQpCgkJCXJldHVybiBjbGlDdHguUHJpbnRPdXRwdXQob3V0KQoJCX0sCgl9Cn0KCi8vIEdldENtZFJlc29sdmVOYW1lIHF1ZXJpZXMgaW5mb3JtYXRpb24gYWJvdXQgYSBuYW1lCmZ1bmMgR2V0Q21kUmVzb2x2ZU5hbWUocXVlcnlSb3V0ZSBzdHJpbmcsIGNkYyAqY29kZWMuQ29kZWMpICpjb2JyYS5Db21tYW5kIHsKCXJldHVybiAmYW1wO2NvYnJhLkNvbW1hbmR7CgkJVXNlOiAgICZxdW90O3Jlc29sdmUgW25hbWVdJnF1b3Q7LAoJCVNob3J0OiAmcXVvdDtyZXNvbHZlIG5hbWUmcXVvdDssCgkJQXJnczogIGNvYnJhLkV4YWN0QXJncygxKSwKCQlSdW5FOiBmdW5jKGNtZCAqY29icmEuQ29tbWFuZCwgYXJncyBbXXN0cmluZykgZXJyb3IgewoJCQljbGlDdHggOj0gY29udGV4dC5OZXdDTElDb250ZXh0KCkuV2l0aENvZGVjKGNkYykKCQkJbmFtZSA6PSBhcmdzWzBdCgoJCQlyZXMsIF8sIGVyciA6PSBjbGlDdHguUXVlcnlXaXRoRGF0YShmbXQuU3ByaW50ZigmcXVvdDtjdXN0b20vJXMvJXMvJXMmcXVvdDssIHF1ZXJ5Um91dGUsIHR5cGVzLlF1ZXJ5UmVzb2x2ZU5hbWUsIG5hbWUpLCBuaWwpCgkJCWlmIGVyciAhPSBuaWwgewoJCQkJZm10LlByaW50ZigmcXVvdDtjb3VsZCBub3QgcmVzb2x2ZSBuYW1lIC0gJXMgXG4mcXVvdDssIG5hbWUpCgkJCQlyZXR1cm4gbmlsCgkJCX0KCgkJCXZhciBvdXQgdHlwZXMuUXVlcnlSZXNSZXNvbHZlCgkJCWNkYy5NdXN0VW5tYXJzaGFsSlNPTihyZXMsICZhbXA7b3V0KQoJCQlyZXR1cm4gY2xpQ3R4LlByaW50T3V0cHV0KG91dCkKCQl9LAoJfQp9Cg=="}}),e._v(" "),o("p",[e._v("Notes on the above code:")]),e._v(" "),o("ul",[o("li",[e._v("The CLI introduces a new "),o("code",[e._v("context")]),e._v(": "),o("a",{attrs:{href:"https://godoc.org/github.com/cosmos/cosmos-sdk/client/context#CLIContext",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("CLIContext")]),o("OutboundLink")],1),e._v(". It carries data about user input and application configuration that are needed for CLI interactions.")]),e._v(" "),o("li",[e._v("The "),o("code",[e._v("path")]),e._v(" required for the "),o("code",[e._v("cliCtx.QueryWithData()")]),e._v(" function maps directly to the names in your query router.\n"),o("ul",[o("li",[e._v("The first part of the path is used to differentiate the types of queries possible to SDK applications: "),o("code",[e._v("custom")]),e._v(" is for "),o("code",[e._v("Queriers")]),e._v(".")]),e._v(" "),o("li",[e._v("The second piece ("),o("code",[e._v("nameservice")]),e._v(") is the name of the module to route the query to.")]),e._v(" "),o("li",[e._v("Finally there is the specific querier in the module that will be called.")]),e._v(" "),o("li",[e._v("In this example the fourth piece is the query. This works because the query parameter is a simple string. To enable more complex query inputs you need to use the second argument of the "),o("a",{attrs:{href:"https://godoc.org/github.com/cosmos/cosmos-sdk/client/context#CLIContext.QueryWithData",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v(".QueryWithData()")]),o("OutboundLink")],1),e._v(" function to pass in "),o("code",[e._v("data")]),e._v(". For an example of this see the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/5af6bd77aa6c0e8facc936947a3365416892e44d/x/staking/keeper/querier.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("queriers in the Staking module"),o("OutboundLink")],1),e._v(".")])])])]),e._v(" "),o("h2",{attrs:{id:"transactions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[e._v("#")]),e._v(" Transactions")]),e._v(" "),o("p",[e._v("Now that the query interactions are defined, it is time to move on to transaction generation in "),o("code",[e._v("txWhois.go")]),e._v(":")]),e._v(" "),o("blockquote",[o("p",[o("em",[o("em",[e._v("NOTE")])]),e._v(": Your application needs to import the code you just wrote. Here the import path is set to this repository ("),o("code",[e._v("github.com/cosmos/sdk-tutorials/nameservice/x/nameservice")]),e._v("). If you are following along in your own repo you will need to change the import path to reflect that ("),o("code",[e._v("github.com/{ .Username }/{ .Project.Repo }/x/nameservice")]),e._v(").")])]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBjbGkKCmltcG9ydCAoCgkmcXVvdDtidWZpbyZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vc3BmMTMvY29icmEmcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2NsaWVudC9jb250ZXh0JnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2NvZGVjJnF1b3Q7CglzZGsgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcyZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay94L2F1dGgmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9hdXRoL2NsaWVudC91dGlscyZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS91c2VyL25hbWVzZXJ2aWNlL3gvbmFtZXNlcnZpY2UvdHlwZXMmcXVvdDsKKQoKZnVuYyBHZXRDbWRCdXlOYW1lKGNkYyAqY29kZWMuQ29kZWMpICpjb2JyYS5Db21tYW5kIHsKCXJldHVybiAmYW1wO2NvYnJhLkNvbW1hbmR7CgkJVXNlOiAgICZxdW90O2J1eS1uYW1lIFtuYW1lXSBbcHJpY2VdJnF1b3Q7LAoJCVNob3J0OiAmcXVvdDtCdXlzIGEgbmV3IG5hbWUmcXVvdDssCgkJQXJnczogIGNvYnJhLkV4YWN0QXJncygyKSwKCQlSdW5FOiBmdW5jKGNtZCAqY29icmEuQ29tbWFuZCwgYXJncyBbXXN0cmluZykgZXJyb3IgewoJCQlhcmdzTmFtZSA6PSBzdHJpbmcoYXJnc1swXSkKCgkJCWNsaUN0eCA6PSBjb250ZXh0Lk5ld0NMSUNvbnRleHQoKS5XaXRoQ29kZWMoY2RjKQoJCQlpbkJ1ZiA6PSBidWZpby5OZXdSZWFkZXIoY21kLkluT3JTdGRpbigpKQoJCQl0eEJsZHIgOj0gYXV0aC5OZXdUeEJ1aWxkZXJGcm9tQ0xJKGluQnVmKS5XaXRoVHhFbmNvZGVyKHV0aWxzLkdldFR4RW5jb2RlcihjZGMpKQoKCQkJY29pbnMsIGVyciA6PSBzZGsuUGFyc2VDb2lucyhhcmdzWzFdKQoJCQlpZiBlcnIgIT0gbmlsIHsKCQkJCXJldHVybiBlcnIKCQkJfQoKCQkJbXNnIDo9IHR5cGVzLk5ld01zZ0J1eU5hbWUoYXJnc05hbWUsIGNvaW5zLCBjbGlDdHguR2V0RnJvbUFkZHJlc3MoKSkKCQkJZXJyID0gbXNnLlZhbGlkYXRlQmFzaWMoKQoJCQlpZiBlcnIgIT0gbmlsIHsKCQkJCXJldHVybiBlcnIKCQkJfQoJCQlyZXR1cm4gdXRpbHMuR2VuZXJhdGVPckJyb2FkY2FzdE1zZ3MoY2xpQ3R4LCB0eEJsZHIsIFtdc2RrLk1zZ3ttc2d9KQoJCX0sCgl9Cn0KCmZ1bmMgR2V0Q21kU2V0V2hvaXMoY2RjICpjb2RlYy5Db2RlYykgKmNvYnJhLkNvbW1hbmQgewoJcmV0dXJuICZhbXA7Y29icmEuQ29tbWFuZHsKCQlVc2U6ICAgJnF1b3Q7c2V0LW5hbWUgW3ZhbHVlXSBbbmFtZV0mcXVvdDssCgkJU2hvcnQ6ICZxdW90O1NldCBhIG5ldyBuYW1lJnF1b3Q7LAoJCUFyZ3M6ICBjb2JyYS5FeGFjdEFyZ3MoMiksCgkJUnVuRTogZnVuYyhjbWQgKmNvYnJhLkNvbW1hbmQsIGFyZ3MgW11zdHJpbmcpIGVycm9yIHsKCQkJYXJnc1ZhbHVlIDo9IGFyZ3NbMF0KCQkJYXJnc05hbWUgOj0gYXJnc1sxXQoKCQkJY2xpQ3R4IDo9IGNvbnRleHQuTmV3Q0xJQ29udGV4dCgpLldpdGhDb2RlYyhjZGMpCgkJCWluQnVmIDo9IGJ1ZmlvLk5ld1JlYWRlcihjbWQuSW5PclN0ZGluKCkpCgkJCXR4QmxkciA6PSBhdXRoLk5ld1R4QnVpbGRlckZyb21DTEkoaW5CdWYpLldpdGhUeEVuY29kZXIodXRpbHMuR2V0VHhFbmNvZGVyKGNkYykpCgkJCW1zZyA6PSB0eXBlcy5OZXdNc2dTZXROYW1lKGFyZ3NOYW1lLCBhcmdzVmFsdWUsIGNsaUN0eC5HZXRGcm9tQWRkcmVzcygpKQoJCQllcnIgOj0gbXNnLlZhbGlkYXRlQmFzaWMoKQoJCQlpZiBlcnIgIT0gbmlsIHsKCQkJCXJldHVybiBlcnIKCQkJfQoJCQlyZXR1cm4gdXRpbHMuR2VuZXJhdGVPckJyb2FkY2FzdE1zZ3MoY2xpQ3R4LCB0eEJsZHIsIFtdc2RrLk1zZ3ttc2d9KQoJCX0sCgl9Cn0KCmZ1bmMgR2V0Q21kRGVsZXRlV2hvaXMoY2RjICpjb2RlYy5Db2RlYykgKmNvYnJhLkNvbW1hbmQgewoJcmV0dXJuICZhbXA7Y29icmEuQ29tbWFuZHsKCQlVc2U6ICAgJnF1b3Q7ZGVsZXRlLW5hbWUgW2lkXSZxdW90OywKCQlTaG9ydDogJnF1b3Q7RGVsZXRlIGEgbmV3IG5hbWUgYnkgSUQmcXVvdDssCgkJQXJnczogIGNvYnJhLkV4YWN0QXJncygxKSwKCQlSdW5FOiBmdW5jKGNtZCAqY29icmEuQ29tbWFuZCwgYXJncyBbXXN0cmluZykgZXJyb3IgewoKCQkJY2xpQ3R4IDo9IGNvbnRleHQuTmV3Q0xJQ29udGV4dCgpLldpdGhDb2RlYyhjZGMpCgkJCWluQnVmIDo9IGJ1ZmlvLk5ld1JlYWRlcihjbWQuSW5PclN0ZGluKCkpCgkJCXR4QmxkciA6PSBhdXRoLk5ld1R4QnVpbGRlckZyb21DTEkoaW5CdWYpLldpdGhUeEVuY29kZXIodXRpbHMuR2V0VHhFbmNvZGVyKGNkYykpCgoJCQltc2cgOj0gdHlwZXMuTmV3TXNnRGVsZXRlTmFtZShhcmdzWzBdLCBjbGlDdHguR2V0RnJvbUFkZHJlc3MoKSkKCQkJZXJyIDo9IG1zZy5WYWxpZGF0ZUJhc2ljKCkKCQkJaWYgZXJyICE9IG5pbCB7CgkJCQlyZXR1cm4gZXJyCgkJCX0KCQkJcmV0dXJuIHV0aWxzLkdlbmVyYXRlT3JCcm9hZGNhc3RNc2dzKGNsaUN0eCwgdHhCbGRyLCBbXXNkay5Nc2d7bXNnfSkKCQl9LAoJfQp9Cg=="}}),e._v(" "),o("p",[e._v("We also need to add the commands to our "),o("code",[e._v("tx")]),e._v(" command in "),o("code",[e._v("x/nameservice/client/cli/tx.go")]),e._v(" file:")]),e._v(" "),o("p",[o("code",[e._v("./x/nameservice/client/cli/tx.go")])]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBjbGkKCmltcG9ydCAoCgkmcXVvdDtmbXQmcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL3NwZjEzL2NvYnJhJnF1b3Q7CgoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9jbGllbnQmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY2xpZW50L2ZsYWdzJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2NvZGVjJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL3VzZXIvbmFtZXNlcnZpY2UveC9uYW1lc2VydmljZS90eXBlcyZxdW90OwopCgovLyBHZXRUeENtZCByZXR1cm5zIHRoZSB0cmFuc2FjdGlvbiBjb21tYW5kcyBmb3IgdGhpcyBtb2R1bGUKZnVuYyBHZXRUeENtZChjZGMgKmNvZGVjLkNvZGVjKSAqY29icmEuQ29tbWFuZCB7CgluYW1lc2VydmljZVR4Q21kIDo9ICZhbXA7Y29icmEuQ29tbWFuZHsKCQlVc2U6ICAgICAgICAgICAgICAgICAgICAgICAgdHlwZXMuTW9kdWxlTmFtZSwKCQlTaG9ydDogICAgICAgICAgICAgICAgICAgICAgZm10LlNwcmludGYoJnF1b3Q7JXMgdHJhbnNhY3Rpb25zIHN1YmNvbW1hbmRzJnF1b3Q7LCB0eXBlcy5Nb2R1bGVOYW1lKSwKCQlEaXNhYmxlRmxhZ1BhcnNpbmc6ICAgICAgICAgdHJ1ZSwKCQlTdWdnZXN0aW9uc01pbmltdW1EaXN0YW5jZTogMiwKCQlSdW5FOiAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50LlZhbGlkYXRlQ21kLAoJfQoKCW5hbWVzZXJ2aWNlVHhDbWQuQWRkQ29tbWFuZChmbGFncy5Qb3N0Q29tbWFuZHMoCgkJLy8gdGhpcyBsaW5lIGlzIHVzZWQgYnkgc3RhcnBvcnQgc2NhZmZvbGRpbmcKCQlHZXRDbWRCdXlOYW1lKGNkYyksCgkJR2V0Q21kU2V0V2hvaXMoY2RjKSwKCQlHZXRDbWREZWxldGVXaG9pcyhjZGMpLAoJKS4uLikKCglyZXR1cm4gbmFtZXNlcnZpY2VUeENtZAp9Cg=="}}),e._v(" "),o("p",[e._v("Notes on the above code:")]),e._v(" "),o("ul",[o("li",[e._v("The "),o("code",[e._v("authcmd")]),e._v(" package is used here. "),o("a",{attrs:{href:"https://godoc.org/github.com/cosmos/cosmos-sdk/x/auth/client/cli#GetAccountDecoder",target:"_blank",rel:"noopener noreferrer"}},[e._v("The godocs have more information on usage"),o("OutboundLink")],1),e._v(". It provides access to accounts controlled by the CLI and facilitates signing.")])]),e._v(" "),o("h3",{attrs:{id:"now-your-ready-to-define-the-routes-that-the-rest-client-will-use-to-communicate-with-your-module"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#now-your-ready-to-define-the-routes-that-the-rest-client-will-use-to-communicate-with-your-module"}},[e._v("#")]),e._v(" Now your ready to define the routes that the REST client will use to communicate with your module")])],1)}),[],!1,null,null,null);c.default=l.exports}}]);