import Head from "next/head";
import Link from "next/link";
import { DropzoneArea } from "material-ui-dropzone";
import { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Drop from "../add-challenges/Dropzone";

import {
  NativeSelect,
  TextField,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";

import React, { useState } from "react";


const addChallenges = () => {
  return (
    <>
        <Head>
        <title>Edit Challenges</title>
      </Head>
      <Navbar />
      <div className="flex flex-col items-center  text-xl mt-11 w-11/12 mx-auto mb-10">
        <div className="space-y-4 ">
          <div className="flex flex-col items-start font-semibold mt-6">
            Edit a new Weekly Challenge
          </div>
          <div>
            <TextField
              id="outlined-textarea"
              label="Challenge Name"
              placeholder="Challenge Name"
              multiline
              fullWidth
            />
          </div>
          <div>
            <TextField
              id="outlined-textarea"
              label="Challenge by"
              placeholder="Challenge builder's name"
              multiline
              fullWidth
            />
          </div>
          <div>
            <TextField
              id="outlined-textarea"
              label="Challenge builder Profile Link (GitHub/Twitter/LinkedIn)"
              placeholder="Challenge builder Profile Link "
              multiline
              fullWidth
            />
          </div>

          <div>
            <TextField
              id="outlined-textarea"
              label="Short Description (300 words)"
              placeholder="Short Description about challenge"
              multiline
              fullWidth
            />
          </div>
          <TextField
            id="outlined-textarea"
            label="Time"
            placeholder="Time Period"
            multiline
            fullWidth
          />
          <TextField
            id="outlined-textarea"
            label="XP"
            placeholder=" Add amount of XP"
            multiline
            fullWidth
          />
          <TextField
            id="outlined-textarea"
            label="Documnetation Link"
            placeholder="Documnetation Link"
            multiline
            fullWidth
          />
          <TextField
            id="outlined-textarea"
            label="Solution Link"
            placeholder="Solution Link"
            multiline
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Challenge Type
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={10}>CSS Sunday</option>
              <option value={20}>JS Thursday</option>
              <option value={30}>Python Friday</option>
            </NativeSelect>
          </FormControl>
          <div className="text-xl">Add Challenge Cover Image</div>
          <Drop />

          <button>
            <div className="py-3 px-2 font-bold  text-green-800  bg-green-200 text-sm rounded-md hover:bg-green-400 hover:shadow-xl">
              Publish
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default addChallenges;
