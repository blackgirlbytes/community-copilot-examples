# copilot-cli-folders-reorganization

The goal was to reorganize the folder structure of my blog stored in markdown files.

I started with a hierarchy like this:

```
.
├── 2023-04-30_my-post
│   ├── index.md
│   └── cover.png
├── 2023-05-01_my-other-post
│   ├── index.md
│   ├── cat.jpeg
│   └── cover.png
├── 2023-05-02_my-third-post
│    ├── index.md
│   └── cover.png
└── 2024-01-01_my-fourth-post
    ├── index.md
    └── cover.png
```

Basically each post was a folder with an `index.md` file and some images.

I wanted to group into subfolders by year and month, like this:

```
.
├── 2023
│   ├── 04
│   │   └── my-post
│   │       ├── index.md
│   │       └── cover.png
│   └── 05
│       ├── my-other-post
│       │   ├── index.md
│       │   ├── cat.jpeg
│       │   └── cover.png
│       └── my-third-post
│           ├── index.md
│           └── cover.png
└── 2024
    └── 01
        └── my-fourth-post
            ├── index.md
            └── cover.png
```

I asked Copilot chat:

> ?? Move all files inside this folder in a new structure that is year/month/filename and you can find year and month on the current filename as year-month-day-name

This is the output:

```bash
 ──────────────────── Command ────────────────────

for file in *; do
  year=$(echo $file | cut -d "-" -f 1);
  month=$(echo $file | cut -d "-" -f 2);
  mkdir -p $year/$month;
  mv $file $year/$month;
done

 ────────────────── Explanation ──────────────────

○ The for loop iterates over a list of items and executes its body for each, using the loop variable $file.
  ◆ The list of items is * which means all files in the current directory.
○ The loop body executes four commands for each file:
  ◆ year=$(...) is used to assign the output of the command inside $(...) to the variable year.
    ◇ echo $file prints the name of the current file to the terminal.
    ◇ | cut -d "-" -f 1 takes this line, splits it at the - character and returns the first part.
  ◆ month=$(...) is used to assign the output of the command inside $(...) to the variable month.
    ◇ echo $file prints the name of the current file to the terminal.
    ◇ | cut -d "-" -f 2 takes this line, splits it at the - character and returns the second part.
  ◆ mkdir -p $year/$month creates a folder with the name of the year and month.
    ◇ -p means that we create the parent folders if they don't exist.
  ◆ mv $file $year/$month moves the current file into the folder with the name of the year and month.
```

I realized that I forgot to specify where to take the file name, so I used the option "Revise Query" and added:

> filename should be split by \_ and take the second half

I received this as output:

```bash
 ──────────────────── Command ────────────────────

for file in *; do
  year=$(echo $file | cut -d "-" -f 1);
  month=$(echo $file | cut -d "-" -f 2);
  name=$(echo $file | cut -d "_" -f 2);
  mkdir -p $year/$month;
  mv $file $year/$month/$name;
done

 ────────────────── Explanation ──────────────────

○ The for loop iterates over a list of items and executes its body for each, using the loop variable $file.
  ◆ The list of items is * which means all files in the current directory.
○ The loop body executes one command for each file:
  ◆ echo "$file" will print the name of the current file to the terminal.
  ◆ year=$(...) is used to assign the output of the command inside $(...) to the variable year.
    ◇ echo $file | cut -d "-" -f 1 takes the file name, splits it at the - character and returns the first part.
  ◆ month=$(...) is used to assign the output of the command inside $(...) to the variable month.
    ◇ echo $file | cut -d "-" -f 2 takes the file name, splits it at the - character and returns the second part.
  ◆ name=$(...) is used to assign the output of the command inside $(...) to the variable name.
    ◇ echo $file | cut -d "_" -f 2 takes the file name, splits it at the _ character and returns the second part.
  ◆ mkdir -p $year/$month creates a folder with the name of the year and month.
    ◇ -p means that we create the parent folders if they don't exist.
  ◆ mv $file $year/$month/$name moves the file to the new folder.
```

I ran the command and found all my files in the new structure ✅
