export const CONTRACT_ADDRESS = "0xDaB5fd9a04777019B1c37cA2974C1Da39DE51176";
export const CONTRACT_ABI = [
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
    inputs: [],
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
        internalType: "string",
        name: "_email",
        type: "string",
      },
    ],
    name: "voting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
