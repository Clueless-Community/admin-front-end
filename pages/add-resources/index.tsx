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
import { FileUploader } from "react-drag-drop-files";

const addChallenges = () => {
  return (
    <>
      <Head>
        <title>Add Resources</title>
      </Head>
      <Navbar />
      <div className="flex flex-col items-center  text-xl mt-11">
        <div className="space-y-4 ">
          <div className="flex flex-col items-start font-semibold mt-6">
             Add new Resources
          </div>
          <div>
            <TextField
              id="outlined-textarea"
              label="Resource Name"
              placeholder="Resource Name"
              multiline
              fullWidth
            />
          </div>

          <div>
            <TextField
              id="outlined-textarea"
              label=" Resource provider name"
              placeholder=" Resource provider name "
              multiline
              fullWidth
            />
          </div>

          <div>
            <TextField
              id="outlined-textarea"
              label="Resource provider Email"
              placeholder="Resource provider Email"
              multiline
              fullWidth
            />
          </div>
          <TextField
            id="outlined-textarea"
            label="Resource provider  Profile Link (GitHub/Twitter/LinkedIn)"
            placeholder="Resource provider Profile Link "
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
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Type
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: "Type",
                id: "uncontrolled-native",
              }}
            >
              <option value={10}>Free</option>
              <option value={20}>paid</option>
              <option value={30}>Free & Paid Both</option>
            </NativeSelect>
          </FormControl>
          
          

          <TextField
            id="outlined-textarea"
            label="Topic"
            placeholder="Select a  Topic"
            multiline
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Tag/ Sub topic
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
