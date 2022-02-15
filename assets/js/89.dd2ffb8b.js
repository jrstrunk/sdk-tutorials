(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{686:function(e,t,n){"use strict";n.r(t);var a=n(0),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"inter-blockchain-communication"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inter-blockchain-communication"}},[e._v("#")]),e._v(" Inter-Blockchain Communication")]),e._v(" "),n("HighlightBox",{attrs:{type:"synopsis"}},[n("p",[e._v("Cross-chain communication in Cosmos enables parallelism and scaleability with transaction finality. This transaction finality solves well-known problems that plague other platforms: transaction costs, network capacity, and transaction confirmation finality. Learn about the Inter-Blockchain Communication protocol (IBC) that makes cross-chain communication possible.")]),e._v(" "),n("p",[e._v("Before you begin, make sure you understand:")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/academy/2-main-concepts/accounts.html"}},[e._v("Accounts")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/academy/2-main-concepts/transactions.html"}},[e._v("Transactions")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/academy/2-main-concepts/messages.html"}},[e._v("Messages")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/academy/2-main-concepts/modules.html"}},[e._v("Modules")])],1)])]),e._v(" "),n("p",[e._v("The Inter-Blockchain Communication Protocol (IBC) allows sending data from one blockchain to another. Most Cosmos applications execute on their own purpose-built blockchain running their own validator set. These are the application-specific blockchains built with the Cosmos SDK.")]),e._v(" "),n("p",[e._v("Applications on one chain may need to communicate with applications on another blockchain. For example, an application could accept tokens from another blockchain as a form of payment. Interoperability at this level calls for a method of exchanging data about the state or the transactions on another blockchain.")]),e._v(" "),n("p",[e._v("While such bridges between blockchains can be built and do exist, they are generally constructed ad-hoc. IBC provides all Cosmos SDK applications with a common protocol and framework for implementing standardized inter-blockchain communication.")]),e._v(" "),n("h2",{attrs:{id:"modular-design-and-application-requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#modular-design-and-application-requirements"}},[e._v("#")]),e._v(" Modular design and application requirements")]),e._v(" "),n("p",[e._v("IBC allows building a wide range of cross-chain applications including token transfers, atomic swaps, multi-chain smart contracts with or without mutually comprehensible VMs, and data and code sharding of various kinds. It is an end-to-end, connection-oriented, stateful protocol for reliable, ordered, and authenticated communication between heterogeneous blockchains arranged in an unknown and dynamic topology. It is possible by specifying a set of data structures, abstractions, and semantics that can be implemented by any distributed ledger provided they satisfy a small set of requirements. Using IBC does not require in-depth knowledge of the low-level details of clients, connections, and proof verification.")]),e._v(" "),n("p",[e._v("Let's take a closer look at the requirements for using IBC. Applications that use the IBC protocol for cross-chain communication must meet the following requirements:")]),e._v(" "),n("ul",[n("li",[e._v("Bind to one or more ports.")]),e._v(" "),n("li",[e._v("Define the packet data.")]),e._v(" "),n("li",[e._v("Define optional acknowledgment structures and methods to encode and decode them.")]),e._v(" "),n("li",[e._v("Implement the "),n("code",[e._v("IBCModule")]),e._v(" interface.")])]),e._v(" "),n("p",[e._v("This is accomplished by specifying a set of data structures, abstractions, and semantics that can be implemented by any distributed ledger provided they satisfy a small set of requirements.")]),e._v(" "),n("p",[e._v("IBC can be used to build a wide range of cross-chain applications, which include token transfers, atomic swaps, multi-chain smart contracts with or without mutually comprehensible virtual machines, and data and code sharding of various kinds.")]),e._v(" "),n("p",[e._v("Modules do not require in-depth knowledge of the low-level details of clients, connections, and proof verification.")]),e._v(" "),n("HighlightBox",{attrs:{type:"info"}},[n("p",[e._v("If you want to begin using IBC, your first step should be to take a closer look at the "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/docs/ibc/overview.md#components-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK documentation on IBC components"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("h3",{attrs:{id:"clients"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#clients"}},[e._v("#")]),e._v(" Clients")]),e._v(" "),n("p",[e._v("IBC clients are "),n("strong",[e._v("light clients")]),e._v(" that are identified by a unique client ID. IBC clients track the consensus state of other blockchains and the proof specs of those blockchains required to properly verify proofs against the client's consensus state. A client can be associated with any number of connections to the counterparty chain.")]),e._v(" "),n("p",[e._v("Supported IBC clients are:")]),e._v(" "),n("ul",[n("li",[n("strong",[n("code",[e._v("solomachine")]),e._v(" light client.")]),e._v(" Devices such as phones, browsers, or laptops.")]),e._v(" "),n("li",[n("strong",[e._v("Tendermint light client.")]),e._v(" The default for Cosmos SDK-based chains.")]),e._v(" "),n("li",[n("strong",[e._v("Localhost (loopback) client.")]),e._v(" Useful for testing, simulation, and relaying packets to modules on the same application.")])]),e._v(" "),n("HighlightBox",{attrs:{type:"tip"}},[n("p",[e._v("You can find documentation on the supported IBC clients here:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/06-solomachine",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK documentation: "),n("code",[e._v("solomachine")]),e._v(" light client"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/07-tendermint",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK documentation: Tendermint light client"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/09-localhost",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK documentation: Localhost client"),n("OutboundLink")],1)])])]),e._v(" "),n("h3",{attrs:{id:"connections"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connections"}},[e._v("#")]),e._v(" Connections")]),e._v(" "),n("p",[e._v("Connections are responsible for facilitating all cross-chain verification of the IBC state. A connection can be associated with any number of channels.")]),e._v(" "),n("p",[e._v("A connection encapsulates two "),n("code",[e._v("ConnectionEnd")]),e._v(" objects on two separate blockchains. Each "),n("code",[e._v("ConnectionEnd")]),e._v(" is associated with a client of the counterparty blockchain. The connection handshake is responsible for verifying that the light clients on each chain are the correct ones for their respective counterparties.")]),e._v(" "),n("h3",{attrs:{id:"proofs-and-paths"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#proofs-and-paths"}},[e._v("#")]),e._v(" Proofs and paths")]),e._v(" "),n("p",[e._v("In IBC, blockchains do not directly pass messages to each other over the network. To communicate, blockchains commit the state to a precisely defined path reserved for a specific message type and a specific counterparty. Relayers monitor for updates on these paths and relay messages by submitting the data stored under the path along with proof of that data to the counterparty chain.")]),e._v(" "),n("p",[e._v("The paths that all IBC implementations must support for committing IBC messages are defined in the "),n("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/core/ics-024-host-requirements",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-24 host state machine requirements"),n("OutboundLink")],1),e._v(". The proof format that all implementations must produce and verify is defined in the "),n("a",{attrs:{href:"https://github.com/confio/ics23",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-23 implementation documentation from Confio"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"capabilities"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#capabilities"}},[e._v("#")]),e._v(" Capabilities")]),e._v(" "),n("p",[e._v("IBC is intended to work in execution environments where modules do not necessarily trust each other. IBC needs to authenticate module actions on ports and channels. Only modules with the appropriate permissions can use the channels. This is ensured with "),n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/architecture/adr-003-dynamic-capability-store.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("dynamic capabilities"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Upon binding to a port or creating a channel for a module, IBC returns a dynamic capability that the module must claim to use that port or channel. This binding strategy prevents other modules from using that port or channel since those modules do not own the appropriate capability.")]),e._v(" "),n("p",[e._v("IBC modules do not need to interact at all with these lower-level abstractions. The relevant abstraction layer for IBC application developers is that of channels and ports.")]),e._v(" "),n("p",[e._v("As self-contained modules a module on one blockchain can communicate with other modules on other blockchains by sending, receiving, and acknowledging packets through channels that are uniquely identified by the "),n("code",[e._v("(channelID, portID)")]),e._v(" tuple. IBC modules can bind to any number of ports. Each port is identified by a unique "),n("code",[e._v("portID")]),e._v(". IBC is designed to be secure with mutually-distrusted modules that operate on the same ledger. Binding a port returns the dynamic object capability.")]),e._v(" "),n("p",[e._v("A module must provide the dynamic object capability to the IBC handler to take action on a particular port, for example to open a channel with its "),n("code",[e._v("portID")]),e._v(". This prevents a malicious module from opening channels with ports it does not own. IBC modules are responsible for claiming the capability that is returned on "),n("code",[e._v("BindPort")]),e._v(".")]),e._v(" "),n("p",[e._v("An analogy to consider: IBC modules as internet apps on a computer. A channel can then be conceptualized as an IP connection with the IBC "),n("code",[e._v("portID")]),e._v(" as an IP port and the IBC "),n("code",[e._v("channelID")]),e._v(" as an IP address.")]),e._v(" "),n("h3",{attrs:{id:"channels-between-ibc-ports-transferring-data-with-packets"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#channels-between-ibc-ports-transferring-data-with-packets"}},[e._v("#")]),e._v(" Channels between IBC ports: transferring data with packets")]),e._v(" "),n("p",[e._v("Channels can be established between two IBC ports. Each port is exclusively owned by a single module. IBC packets are sent over channels to allow modules to communicate with one another. All IBC packets contain to maintain interoperability:")]),e._v(" "),n("ul",[n("li",[e._v("The source "),n("code",[e._v("portID")])]),e._v(" "),n("li",[e._v("The source "),n("code",[e._v("channelID")])]),e._v(" "),n("li",[e._v("The destination "),n("code",[e._v("portID")])]),e._v(" "),n("li",[e._v("The destination "),n("code",[e._v("channelID")])]),e._v(" "),n("li",[e._v("A sequence to optionally enforce ordering")]),e._v(" "),n("li",[n("code",[e._v("TimeoutTimestamp")])]),e._v(" "),n("li",[n("code",[e._v("TimeoutHeight")])])]),e._v(" "),n("p",[e._v("The port channels allow IBC to correctly route the packets to the destination module, while also allowing modules receiving packets to know from which module the packet has come. Modules send custom application data to each other inside the Data []byte field of the IBC packet - packet data is completely opaque to IBC handlers. The sender module encodes the application-specific packet information in the data field and the destination module decodes the data to get the original application data.")]),e._v(" "),n("p",[e._v("Modules may choose which channels they wish to communicate over. IBC expects modules to implement callbacks called during the channel handshake.")]),e._v(" "),n("p",[n("em",[e._v("How does a four-step handshake look like?")]),e._v(" A four-step handshake takes place in the following way:")]),e._v(" "),n("ol",[n("li",[e._v("Chain A sends a "),n("code",[e._v("ChanOpenInit")]),e._v(" message to signal a channel initialization attempt with chain B.")]),e._v(" "),n("li",[e._v("Chain B sends a "),n("code",[e._v("ChanOpenTry")]),e._v(" message to try opening the channel on chain A.")]),e._v(" "),n("li",[e._v("Chain A sends a "),n("code",[e._v("ChanOpenAck")]),e._v(" message to mark chain A's channel end status as open.")]),e._v(" "),n("li",[e._v("Chain B sends a "),n("code",[e._v("ChanOpenConfirm")]),e._v(" message to mark chain B's channel end status as open.")]),e._v(" "),n("li",[e._v("Channel is open on both sides.")])]),e._v(" "),n("p",[e._v("Just as ports came with dynamic capabilities, channel initialization returns a dynamic capability the module must claim so that modules can pass in a capability to authenticate channel actions, for example, to send packets. Channel capability is passed into the callback in the first part of the handshake.")]),e._v(" "),n("h3",{attrs:{id:"receipts-and-timeouts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#receipts-and-timeouts"}},[e._v("#")]),e._v(" Receipts and timeouts")]),e._v(" "),n("p",[e._v("IBC works over a distributed network. It might be that IBC needs to rely on potentially faulty relayers to relay messages between ledgers. Cross-chain communication also requires handling instances where a packet does not get sent to its destination on time or at all.")]),e._v(" "),n("p",[e._v("A proof-of-packet timeout can be submitted to the original chain when a timeout is reached, which can then perform the application-specific logic to timeout the packet by rolling back the packet send changes refunding senders any locked funds.")]),e._v(" "),n("p",[e._v("A timeout of a single packet in the channel closes the channel in ORDERED channels. Packets can be received in any order in UNORDERED channels. IBC writes a packet receipt for each sequence it has received in the UNORDERED channel.")]),e._v(" "),n("h3",{attrs:{id:"acknowledgment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgment"}},[e._v("#")]),e._v(" Acknowledgment")]),e._v(" "),n("p",[e._v("Modules also write application-specific acknowledgments when processing a packet. Acknowledgments can be performed in two ways:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Synchronously")]),e._v(" on "),n("code",[e._v("OnRecvPacket")]),e._v(", if the module processes packets as soon as they are received from an IBC module.")]),e._v(" "),n("li",[n("strong",[e._v("Asynchronously")]),e._v(", if the module processes packets at some later point after receiving them.")])]),e._v(" "),n("p",[e._v("This acknowledgment data is opaque to IBC similar to the packet data. The acknowledgment data is treated by IBC as a simple byte string "),n("code",[e._v("[]byte")]),e._v(". Receiver modules have to encode acknowledgments, so that sender modules can decode them correctly. How the acknowledgment is encoded should be decided through version negotiation during the channel handshake.")]),e._v(" "),n("p",[e._v("After the acknowledgment has been written by the receiving chain, a relayer relays the acknowledgment back to the original sender module, which then executes the application-specific acknowledgment logic using the acknowledgment.")]),e._v(" "),n("p",[e._v("When the acknowledgment is received successfully on the original sender chain, the IBC module deletes the corresponding packet commitment as it is no longer needed.")]),e._v(" "),n("h2",{attrs:{id:"non-tendermint-chains-and-ibc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#non-tendermint-chains-and-ibc"}},[e._v("#")]),e._v(" Non-Tendermint chains and IBC")]),e._v(" "),n("p",[e._v("IBC can bridge Tendermint chains but also non-Tendermint chains. Two types of non-Tendermint chains are supported:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Fast-finality chains.")]),e._v(" Any fast-finality consensus algorithms can connect with Cosmos by adapting IBC.")]),e._v(" "),n("li",[n("strong",[e._v("Probabilistic-finality chains.")]),e._v(" For blockchains that do not have fast-finality like Proof-of-Work (PoW) chains things get a bit trickier. IBC uses a special kind of proxy-chain called a peg-zone in this case.")])]),e._v(" "),n("h3",{attrs:{id:"ethereum-peg-zone"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-peg-zone"}},[e._v("#")]),e._v(" Ethereum peg-zone")]),e._v(" "),n("HighlightBox",{attrs:{type:"info"}},[n("p",[e._v("A great example of one of these peg-zones is the "),n("a",{attrs:{href:"https://github.com/cosmos/gravity-bridge",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gravity Bridge"),n("OutboundLink")],1),e._v(". Take a look at the "),n("RouterLink",{attrs:{to:"/academy/2-main-concepts/bridges.html"}},[e._v("section on bridges")]),e._v(" for more information on it.")],1)]),e._v(" "),n("p",[e._v("A peg-zone is a blockchain that tracks the state of another blockchain. The peg-zone itself has fast-finality and is therefore compatible with IBC. Its role is to establish finality for the blockchain it bridges.")]),e._v(" "),n("HighlightBox",{attrs:{info:"info"}},[n("p",[e._v("For more on IBC, its paradigms, and Interchain accounts, a looks into Josh Lee's post from 2020 "),n("a",{attrs:{href:"https://medium.com/chainapsis/why-interchain-accounts-change-everything-for-cosmos-interoperability-59c19032bf11",target:"_blank",rel:"noopener noreferrer"}},[e._v("Why Interchain Accounts Change Everything for Cosmos Interoperability"),n("OutboundLink")],1),e._v(" is recommended.")]),e._v(" "),n("p",[e._v("Relayers are an essential part of the IBC infrastructure and there are several implementations. To learn more about relaying please visit the "),n("a",{attrs:{href:"https://ibcprotocol.org/relayers/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC website"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("h2",{attrs:{id:"next-up"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[e._v("#")]),e._v(" Next up")]),e._v(" "),n("p",[e._v("You can now skip ahead to the "),n("RouterLink",{attrs:{to:"/academy/2-main-concepts/bridges.html"}},[e._v("next section")]),e._v(" to discover bridges in the Cosmos SDK, or you can dive into the code samples below.")],1),e._v(" "),n("ExpansionPanel",{attrs:{title:"Show me some code for my checkers blockchain"}},[n("p",[e._v("You now want to allow players to play with tokens from a different chain. To do that:")]),e._v(" "),n("ul",[n("li",[e._v("The game information must state the token in which the wager will be denominated upon creation.")]),e._v(" "),n("li",[e._v("The different payments have to be updated so that they do not use the default token.")])]),e._v(" "),n("p",[e._v("Denominating the wager into another token is just a matter of allowing another string that uniquely identifies the token:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBTdG9yZWRHYW1lIHN0cnVjdCB7CiAgICAuLi4KICAgIFRva2VuIHN0cmluZwp9Cgp0eXBlIE1zZ0NyZWF0ZUdhbWUgc3RydWN0IHsKICAgIC4uLgogICAgVG9rZW4gc3RyaW5nCn0K"}}),e._v(" "),n("p",[e._v("You can add a helper function to "),n("code",[e._v("StoredGame")]),e._v(" such that:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoc3RvcmVkR2FtZSAqU3RvcmVkR2FtZSkgR2V0V2FnZXJDb2luKCkgKHdhZ2VyIHNkay5Db2luKSB7CiAgICByZXR1cm4gc2RrLk5ld0NvaW4oc3RvcmVkR2FtZS5Ub2tlbiwgc2RrLk5ld0ludChpbnQ2NChzdG9yZWRHYW1lLldhZ2VyKSkpCn0K"}}),e._v(" "),n("p",[e._v("With that the payments are updated with:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZXJyID0gay5iYW5rLlNlbmRDb2luc0Zyb21BY2NvdW50VG9Nb2R1bGUoY3R4LCBibGFjaywgJnF1b3Q7Y2hlY2tlcnMmcXVvdDssIHNkay5OZXdDb2lucyhzdG9yZWRHYW1lLkdldFdhZ2VyQ29pbigpKSkKLy8gb3IKZXJyID0gay5iYW5rLlNlbmRDb2luc0Zyb21Nb2R1bGVUb0FjY291bnQoY3R4LCAmcXVvdDtjaGVja2VycyZxdW90Oywgd2lubmVyQWRkcmVzcywgc2RrLk5ld0NvaW5zKHdpbm5pbmdzKSkK"}}),e._v(" "),n("p",[e._v("There is nothing more to it in this simple use of "),n("em",[e._v("foreign")]),e._v(" tokens.")])],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);