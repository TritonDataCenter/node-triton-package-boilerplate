This repository is a boilerplate for a Triton-related node.js package using
best practices agreed upon by the Triton team. See also the
[triton-service-boilerplate
repository](https://github.com/joyent/triton-service-boilerplate) for the
equivalent for a TritonDC service.


# Why?

"Variety is the spice of life" may be true, but not for toothbrushes. The Triton
boilerplate repos are an effort to agree on toothbrush details: pick one
that works well (perhaps not your favourite), and get onto to the things that
are fun and spicy.

- Let's avoid cluttering up CRs with style nits.
- Let's not have 3 UUID generation libs, 2 async libs, 3 test frameworks.

Part of accepting these best practices is an agreement that getting on to the
meat of TritonDC development is more important than preferences over the
toothbrushes described here.


# Making best practice decisions

The best practices represented in the Triton boilerplate repos should not be
law. If there is an argument to be made that a "best" practice is a hindrance
or has a *better* alternative (better enough to justify changing), then let's
discuss it (on ~triton-dev, a tritoncall, or triton-dev@joyent.com).
Likewise for introducing a new best practice.


# Usage

## Usage for a new repo

Get a copy of this repo:

    git clone https://github.com/joyent/node-triton-package-boilerplate.git node-triton-mymodule
    cd node-triton-mymodule
    rm -rf .git
    git init .

Work through this "README-BOILERPLATE.md" and all hits for "BOILERPLATE"

    $ grep -r BOILERPLATE .
    ./README.md:BOILERPLATE: ^^ the package name
    ./README.md:BOILERPLATE: general introduction to the package: What it is. Why it exists,
    ...
    $ rm README-BOILERPLATE.md

to get a first commit for your repo:

    git commit -am "initial repo structure from node-triton-package-boilerplate@X.Y.Z"


## Usage for an existing repo

Work through "BOILERPLATE" notes in files in this repo and any sections below
to incorporate best practices into your repo.


# Best Practices

The following subsections provide more details on some of the best practices
choices made for this Triton boilerplate.


## Code lint and style

The eventual plan is to settle on eslint for code linting, code style, and as
the driver using [prettier](https://github.com/prettier/prettier) for code
formatting. The specifics are not yet finalized, however. See the following
for details:

- [TRITON-155](https://jira.joyent.us/browse/TRITON-155)
- [RFD 100](https://github.com/joyent/rfd/blob/master/rfd/0100/README.md)

TODO: document `make fmt`, ".eslintrc", ".prettierrc", and requirements in
"devDependencies".


## Releasing and Changelogs

TODO: document `make cutarelease`, "CHANGES.md", and `make check-version`.


## joyent/eng.git Makefiles

TODO: document usage and updating (manual) of eng.git Makefiles.


## Testing

Small unit tests are the bricks that allow sturdy structures of maintainable
code to be built.  `test/unit` should mimic the structure of the main directory
of code, with tests for most modules, objects, functions added as they grow.

The hope is to eventually have a Joyent and JavaScript specific document along
the lines of: <https://automated-testing-playbook.18f.gov/> Until then the general
guidance there applies.

