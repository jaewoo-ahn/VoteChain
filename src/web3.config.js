// export const CONTRACT_ADDRESS = "0xD8b9cCc4201cD2a653C6bd2F4697a7F376c35Ef3";

// export const CONTRACT_ABI = [
//   {
//     inputs: [
//       {
//         internalType: "string",
//         name: "_title",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "_context",
//         type: "string",
//       },
//       {
//         internalType: "uint256",
//         name: "_voteType",
//         type: "uint256",
//       },
//       {
//         internalType: "string[]",
//         name: "_elective",
//         type: "string[]",
//       },
//       {
//         internalType: "uint256",
//         name: "_endTime",
//         type: "uint256",
//       },
//       {
//         internalType: "address[]",
//         name: "_regardingUsers",
//         type: "address[]",
//       },
//     ],
//     name: "makeANewPoll",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "pollNumber",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "_voteNumber",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "_votedNumber",
//         type: "uint256",
//       },
//       {
//         internalType: "address",
//         name: "_email",
//         type: "address",
//       },
//     ],
//     name: "voting",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "getAllPoll",
//     outputs: [
//       {
//         components: [
//           {
//             internalType: "uint256",
//             name: "number",
//             type: "uint256",
//           },
//           {
//             internalType: "string",
//             name: "title",
//             type: "string",
//           },
//           {
//             internalType: "string",
//             name: "context",
//             type: "string",
//           },
//           {
//             internalType: "address",
//             name: "by",
//             type: "address",
//           },
//           {
//             internalType: "uint256",
//             name: "time",
//             type: "uint256",
//           },
//           {
//             internalType: "uint256",
//             name: "pros",
//             type: "uint256",
//           },
//           {
//             internalType: "uint256",
//             name: "cons",
//             type: "uint256",
//           },
//           {
//             internalType: "bool",
//             name: "completed",
//             type: "bool",
//           },
//           {
//             internalType: "enum VC.voteType",
//             name: "votetype",
//             type: "uint8",
//           },
//           {
//             internalType: "string[]",
//             name: "elective",
//             type: "string[]",
//           },
//           {
//             internalType: "uint256[]",
//             name: "electiveCount",
//             type: "uint256[]",
//           },
//           {
//             internalType: "uint256",
//             name: "endTime",
//             type: "uint256",
//           },
//           {
//             internalType: "address[]",
//             name: "regardingUsers",
//             type: "address[]",
//           },
//         ],
//         internalType: "struct VC.Poll[]",
//         name: "",
//         type: "tuple[]",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "_by",
//         type: "address",
//       },
//     ],
//     name: "getMadeVote",
//     outputs: [
//       {
//         components: [
//           {
//             internalType: "uint256",
//             name: "number",
//             type: "uint256",
//           },
//           {
//             internalType: "string",
//             name: "title",
//             type: "string",
//           },
//           {
//             internalType: "string",
//             name: "context",
//             type: "string",
//           },
//           {
//             internalType: "address",
//             name: "by",
//             type: "address",
//           },
//           {
//             internalType: "uint256",
//             name: "time",
//             type: "uint256",
//           },
//           {
//             internalType: "uint256",
//             name: "pros",
//             type: "uint256",
//           },
//           {
//             internalType: "uint256",
//             name: "cons",
//             type: "uint256",
//           },
//           {
//             internalType: "bool",
//             name: "completed",
//             type: "bool",
//           },
//           {
//             internalType: "enum VC.voteType",
//             name: "votetype",
//             type: "uint8",
//           },
//           {
//             internalType: "string[]",
//             name: "elective",
//             type: "string[]",
//           },
//           {
//             internalType: "uint256[]",
//             name: "electiveCount",
//             type: "uint256[]",
//           },
//           {
//             internalType: "uint256",
//             name: "endTime",
//             type: "uint256",
//           },
//           {
//             internalType: "address[]",
//             name: "regardingUsers",
//             type: "address[]",
//           },
//         ],
//         internalType: "struct VC.Poll[]",
//         name: "",
//         type: "tuple[]",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "_user",
//         type: "address",
//       },
//     ],
//     name: "getMyVotedAll",
//     outputs: [
//       {
//         components: [
//           {
//             internalType: "uint256",
//             name: "number",
//             type: "uint256",
//           },
//           {
//             internalType: "string",
//             name: "title",
//             type: "string",
//           },
//           {
//             internalType: "string",
//             name: "context",
//             type: "string",
//           },
//           {
//             internalType: "address",
//             name: "by",
//             type: "address",
//           },
//           {
//             internalType: "uint256",
//             name: "time",
//             type: "uint256",
//           },
//           {
//             internalType: "uint256",
//             name: "pros",
//             type: "uint256",
//           },
//           {
//             internalType: "uint256",
//             name: "cons",
//             type: "uint256",
//           },
//           {
//             internalType: "bool",
//             name: "completed",
//             type: "bool",
//           },
//           {
//             internalType: "enum VC.voteType",
//             name: "votetype",
//             type: "uint8",
//           },
//           {
//             internalType: "string[]",
//             name: "elective",
//             type: "string[]",
//           },
//           {
//             internalType: "uint256[]",
//             name: "electiveCount",
//             type: "uint256[]",
//           },
//           {
//             internalType: "uint256",
//             name: "endTime",
//             type: "uint256",
//           },
//           {
//             internalType: "address[]",
//             name: "regardingUsers",
//             type: "address[]",
//           },
//         ],
//         internalType: "struct VC.Poll[]",
//         name: "",
//         type: "tuple[]",
//       },
//       {
//         internalType: "uint256[]",
//         name: "",
//         type: "uint256[]",
//       },
//       {
//         internalType: "uint256[]",
//         name: "",
//         type: "uint256[]",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "_address",
//         type: "address",
//       },
//     ],
//     name: "getRegardingUserPolls",
//     outputs: [
//       {
//         components: [
//           {
//             internalType: "uint256",
//             name: "number",
//             type: "uint256",
//           },
//           {
//             internalType: "string",
//             name: "title",
//             type: "string",
//           },
//           {
//             internalType: "string",
//             name: "context",
//             type: "string",
//           },
//           {
//             internalType: "address",
//             name: "by",
//             type: "address",
//           },
//           {
//             internalType: "uint256",
//             name: "time",
//             type: "uint256",
//           },
//           {
//             internalType: "uint256",
//             name: "pros",
//             type: "uint256",
//           },
//           {
//             internalType: "uint256",
//             name: "cons",
//             type: "uint256",
//           },
//           {
//             internalType: "bool",
//             name: "completed",
//             type: "bool",
//           },
//           {
//             internalType: "enum VC.voteType",
//             name: "votetype",
//             type: "uint8",
//           },
//           {
//             internalType: "string[]",
//             name: "elective",
//             type: "string[]",
//           },
//           {
//             internalType: "uint256[]",
//             name: "electiveCount",
//             type: "uint256[]",
//           },
//           {
//             internalType: "uint256",
//             name: "endTime",
//             type: "uint256",
//           },
//           {
//             internalType: "address[]",
//             name: "regardingUsers",
//             type: "address[]",
//           },
//         ],
//         internalType: "struct VC.Poll[]",
//         name: "",
//         type: "tuple[]",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "_user",
//         type: "address",
//       },
//     ],
//     name: "getVoteResults",
//     outputs: [
//       {
//         internalType: "string[]",
//         name: "",
//         type: "string[]",
//       },
//       {
//         internalType: "uint256[]",
//         name: "",
//         type: "uint256[]",
//       },
//       {
//         components: [
//           {
//             internalType: "uint256",
//             name: "number",
//             type: "uint256",
//           },
//           {
//             internalType: "string",
//             name: "title",
//             type: "string",
//           },
//           {
//             internalType: "string",
//             name: "context",
//             type: "string",
//           },
//           {
//             internalType: "address",
//             name: "by",
//             type: "address",
//           },
//           {
//             internalType: "uint256",
//             name: "time",
//             type: "uint256",
//           },
//           {
//             internalType: "uint256",
//             name: "pros",
//             type: "uint256",
//           },
//           {
//             internalType: "uint256",
//             name: "cons",
//             type: "uint256",
//           },
//           {
//             internalType: "bool",
//             name: "completed",
//             type: "bool",
//           },
//           {
//             internalType: "enum VC.voteType",
//             name: "votetype",
//             type: "uint8",
//           },
//           {
//             internalType: "string[]",
//             name: "elective",
//             type: "string[]",
//           },
//           {
//             internalType: "uint256[]",
//             name: "electiveCount",
//             type: "uint256[]",
//           },
//           {
//             internalType: "uint256",
//             name: "endTime",
//             type: "uint256",
//           },
//           {
//             internalType: "address[]",
//             name: "regardingUsers",
//             type: "address[]",
//           },
//         ],
//         internalType: "struct VC.Poll[]",
//         name: "",
//         type: "tuple[]",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
// ];
export const CONTRACT_ADDRESS = "0x03BfC9B9462F709DD8aa0da0245E43776A86f0d2";
export const CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "string",
        name: "_context",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_voteType",
        type: "uint256",
      },
      {
        internalType: "string[]",
        name: "_elective",
        type: "string[]",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "_regardingUsers",
        type: "address[]",
      },
    ],
    name: "makeANewPoll",
    outputs: [
      {
        internalType: "uint256",
        name: "pollNumber",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_voteNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_votedNumber",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_email",
        type: "address",
      },
    ],
    name: "voting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllPoll",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "number",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "context",
            type: "string",
          },
          {
            internalType: "address",
            name: "by",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pros",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cons",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "completed",
            type: "bool",
          },
          {
            internalType: "enum VC.voteType",
            name: "votetype",
            type: "uint8",
          },
          {
            internalType: "string[]",
            name: "elective",
            type: "string[]",
          },
          {
            internalType: "uint256[]",
            name: "electiveCount",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "regardingUsers",
            type: "address[]",
          },
        ],
        internalType: "struct VC.Poll[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_by",
        type: "address",
      },
    ],
    name: "getMadeVote",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "number",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "context",
            type: "string",
          },
          {
            internalType: "address",
            name: "by",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pros",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cons",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "completed",
            type: "bool",
          },
          {
            internalType: "enum VC.voteType",
            name: "votetype",
            type: "uint8",
          },
          {
            internalType: "string[]",
            name: "elective",
            type: "string[]",
          },
          {
            internalType: "uint256[]",
            name: "electiveCount",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "regardingUsers",
            type: "address[]",
          },
        ],
        internalType: "struct VC.Poll[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getRegardingUserPolls",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "number",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "context",
            type: "string",
          },
          {
            internalType: "address",
            name: "by",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pros",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cons",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "completed",
            type: "bool",
          },
          {
            internalType: "enum VC.voteType",
            name: "votetype",
            type: "uint8",
          },
          {
            internalType: "string[]",
            name: "elective",
            type: "string[]",
          },
          {
            internalType: "uint256[]",
            name: "electiveCount",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "regardingUsers",
            type: "address[]",
          },
        ],
        internalType: "struct VC.Poll[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getVoteResults",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "number",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "context",
            type: "string",
          },
          {
            internalType: "address",
            name: "by",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pros",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cons",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "completed",
            type: "bool",
          },
          {
            internalType: "enum VC.voteType",
            name: "votetype",
            type: "uint8",
          },
          {
            internalType: "string[]",
            name: "elective",
            type: "string[]",
          },
          {
            internalType: "uint256[]",
            name: "electiveCount",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "regardingUsers",
            type: "address[]",
          },
        ],
        internalType: "struct VC.Poll[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
