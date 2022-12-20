const abcPriority = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

function findItemPriority(item) {
    let n = 0;
    for (const priority of abcPriority) {
        if (item === priority) {
            n = abcPriority.indexOf(item);
            break;
        }
    }
    return (n + 1)
}

// * PART ONE * //

function findDuplicateItem(rucksack) {
    const x = (rucksack.length / 2);
    if ((rucksack.length % 2) === 1) {
        console.log(`this is very odd.`)
    }
    const leftCompartment = rucksack.slice(0, x);
    const rightCompartment = rucksack.slice(x);
    let duplicate = '';
    for (const item of leftCompartment) {
        if (rightCompartment.includes(item)) {
            duplicate = item;
            break;
        }
    }
    return duplicate;
}

function findAllPriorities(allRucksacks) {
    const splitRucksacks = allRucksacks.split('\n');
    let totalPriority = 0;
    for (const rucksack of splitRucksacks) {
        const duplicate = findDuplicateItem(rucksack);
        const priority = findItemPriority(duplicate);
        // console.log(duplicate, priority)
        totalPriority += priority;
    }
    return totalPriority;
}

// * PART TWO * // 

function findElfGroups(allElves) {
    const splitElves = allElves.split('\n')
    const elfGroups = [];
    for (let i = 0; i < splitElves.length; ) {
        elfGroups.push([splitElves[i], splitElves[i+1], splitElves[i+2]]);
        i += 3;
    }
    // console.log(elfGroups)
    return elfGroups;
}

function findCommonItem(group) { 
    const elfOne = group[0];
    const elfTwo = group[1];
    const elfThree = group[2];
    let commonItems = [];
    for (const item of elfOne) {
        if (elfTwo.includes(item)) {
            commonItems.push(item)
        }
    }
    // console.log(`items that elfOne and elfTwo both hold: ${commonItems}`);
    let finalItem = commonItems.filter(item => elfThree.includes(item));
    return finalItem;
}

function findGroupPriority(allRucksacks) {
    const groupedElves = findElfGroups(allRucksacks);
    let totalPriority = 0;
    for (const group of groupedElves) {
        const item = findCommonItem(group)[0];
        const priority = findItemPriority(item);
        // console.log(item, priority)
        totalPriority += priority; 
    }
    return totalPriority;
}

const testInput = (`vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`);
// console.log(findAllPriorities(testInput));
console.log(findGroupPriority(testInput))

const puzzleInput = `VdzVHmNpdVmBBCpmQLTNfTtMhMJnhFhTTf
FgqsZbqDDFqRrhhJnsnLMTfhJG
bRRRPrRRwSwbDqgjvDZbRbQzpzmQVWCzzBdvQBFCzlWV
GcDdRdvhRssRhGDdShCRtqWjlQzqWgqzNfNjfQWWjt
mwwnnPFwmVrPmJmzfNzqCjQCbgVlgC
nPnHHLrHwmJTrCTJpThBscBSdSLGZvZBvRhZ
RVQQcVlcSRclfZCCCnMJJTSTnC
NdHwjdwjbBBZrrZrbJDZJJ
wmhjGGBGwwmjtjtdPlfRcpVQlhRppVJF
pplbNBPPrppllrFNbpvppSTcwqcWFhTTShhJDTchqd
RGzRfLjjmZmfmwLftTWhStStJWTdWmDm
nfsMjQssnpPvNnrPrw
SjjBgllzlQjBZvlBBgcFbgJHsMhJqbMHPggJbM
hRLRVDdRRWnJqnnHTqMCnH
GRfLddRRpVhNVrWSjwQQzSzcGSBQSc
qMwNqqBdQdnTVBBVVhMVnVFzTHPggTPjGRDzvPTjjmvPDj
sbSrWJpStrtPtRPttzmmDD
pfbJJcbsrcLpWLllsnFmcqcwQncnQQqVNQ
RBTWCMwCwdZThPZcZZ
pVmVpHLFFFHHVgVmvNmHSQNvddlPPzZJMPcdhclhjczLdZMP
vnnNnFStGMRDwWnn
fWDdJTpDJzdBBBdmDSbSRHRwPqbPbHgSbz
slQtQvNsMVvrrgPRgRglnhwWPH
sGMMQFrsjvNMfWmdpfFDFZBf
vnMRMWCMJwWWwwWPjmSdVmLdzvVbLrhL
HsNfDHQlZpNqfQzbLbrqhjLmVdjd
dfDZQsNpstHHHptZDDtZWgngtgBMPMMRwCPtBBGW
HwQwwbwFNWHwHBVFQFLQzRznZnSzcjjjpPbcPpSP
vTfTJsCmsftJZmTSSdPvzdjRSvPdjd
TrGtTJfmGDfDhrhJJJsqrZhDBFLHHLLQWFwwlWBVBBVwgLFD
FFTJRLccQgmTbSsbGm
PBPPqCvCwqwhQQVhQngmVmSgglmGnHbnmb
zqthvtQPBfCCzPwQPtwQzPwNLfNRFNLdLRLFRFFNLFdFdW
nszjQnsPwjznzCCrhJqvjqhmBv
tFWdHGWFGtctlNNpZBBhmqTrrbWqvTBT
dlFtcpHDVVVHFdNGHGpGfQgsPDzSMsQwwPwgLLBQ
TzQqTJGvnnSzqrWTnvfbbcflQcVltfcCMPVM
jFjNZFFJLpFwmBwblcpptcVtfbbVlR
jmmJdBBLNdGDWDDrdzqn
pzddqQmGgbqgGpbJmmdnLZDCRZnZvFlLRZLSlLRT
rVwchcBBMwVBHhHTZCTSGSCRTZlTDr
HtccPfjfBhMtVBGHWpNqJdJdpjNJppWz
WThTWWhtPbZRvvWbbvRTSRMjVRLLgFssgLpVsfSF
JdwrlJcCwfzdqwwjsjzpLMgVsMFgML
lQrwHNGJHClvTmfhBmPQmt
lbRLhcLRpLJzgdGddF
qvhwqDDCVtBDVhfMVGFnzGGzTBnGzGGgFg
VjCwCWCMtjVDtChvQhtffcSmHpNWrrcHZHHZpplWbp
DJVDVdvpmZdPgrCbgbgCJC
lzczcWwwznGhBgPSvTlCrNgqNC
wGzzQhzGGsBBGRBcQwGwnwjmmRHpRfmmMpppMjjHDvLL
HJjJQWjFmmWtFmJTMchghhDwNMhVMWML
SznPSRfRSSPdrrPSShbDVhbLPwcwGGwVNh
ddRfzdRrCrRsZDSnFjspvFvqFqFqTvJt
lflfjQfjvljfbfMLTTDCmHNLNVbL
HSJnRrrJZJssnGRrnsrcqqRnDCLBMhVCTLVLhVNVJBBBhhBm
SsrGGqqnSsWSnnqWHSrPfzftvFdvWlwfQgQwWvzz
nQlsGnFGwwqNJWmJJjpplt
HMTLPTRdvsTCCThDCZdLdLDNNpJBWJbjJMpBmbtNptBWmm
DLCzPzTzZDdLdGSGfSGrsnQGzr
LNPPLHNPHQNQSBFDWDPgggFv
hszfWCWJhrBMsSSBgvFD
GGZjfmJTjmZfrJrZrZJRGwNQnlLNHWjLVjlwdVNHpV
BdNVdTcGVclmTwrTnwPwrHCr
zttBWzfLsCggHPwDrf
szsWSMbWzzbqBbzJjtjsvMzzvdmdVpGllpcRNZZhmRpZcGGc
CjdbMmmmZFnzzgHlttGBVqtBGtsldG
LvPPWNcFSSRslWhBsllT
ppccvLPpcSNwLLwrDNNpLvwJHCMDmbCJbFzgmZZmFgbgnM
TTNRwZqhcTTjsNTTsmrJlvrmmmqqHSrlJH
fLQCCdtcfCDDVbVVQdFbQbdJHMHrJHrHnMllHdMHPrMdln
WfQLQWWDbwRTWcRssN
HQGQWHPDHNjMNQGNWNTWCvZllzqFZqzvvzhCtvFj
DfgwdgfcFpchztvt
sRggdwwVdgmnSTnnDBPBNWLn
WbCZCfTVTTJjSwGdWNDGGw
MMRqggMsqhlmlhrssHgRnRmRvdzdczvdNGNLzScGDrNzrLNc
lRqsnRhmqqQnQpgQMlgDqRfBTJVFbJZQtBCbZQJVZFFb
JnhQcCnmLDsmgmgr
bbMZppRFGGRPfBMMRGMZssTTrLlLfsLlVLdsLsdn
GZGSpPGMZtGGPFFRGBCwhvwjjcnJctvQcvHq
vvrPrHZMGJNRMnqn
BVChWWcDVWsBwCWwGrJNhRLJJnJtLqnq
cjDfcfpWWsfWccBsHgPgrPTdpZbbgggv
GshtVtVtjSCVtVvVGtlVvFZLMvLRZmHmZwbLwZdLdZmR
JWzNDQzjcgJgQBJgzgMwLLHZZcdPwRLwRdHZ
QWTppBWfDrrNBTTfffhFCpVSjnhCGsFtsqSl
nmbCnzHHNzCjCJHJNSCWHLBLrvBrrSGRBDhrDRLrGL
TVtPllwcgdmTRhLQTQhT
fdFtccFcpPmggfdfNzHzCMsbCnWnJs
fMgddvjgRRvjvjVJVdTlZGGtGnrlnqTccNjl
HHSFSWSmmpbBpZlGncrNGbNtrn
WDWBDDBDBDCwPBWBDWNQDgzvVvLRvsVLRwvwdJVLwL
ZSmmvcpsmcJmJvqgBZgZqqtCtZjl
WhDwhFSDgtBFjnFg
rTrSTLWTTHNMNwNrMVddwNNhsmJGQcRsRcJGsJzQJsrzPsPm
GBtLmPsCQqsGqgghZHDzzgLbFz
zjjVTzTlRjRJfznrvrfpnNhFSghbbNFgHrbHZbDHbH
vpfcTJVpcVlfcQPMPCGzCBsd
HMhZNffcPZfNMrzjjFdGcJDjvJ
VSBVVLlSQQmTVSWpSQzDrHzTTvDvFjFdGGzT
mQSplVHWbHLSgWQnShNwsZMZPfbsNCRNCt
MMqvDzLwZzlMqQfdGWPfgPffPglH
ShTcJshsrRdnrdfrrfHp
VVRtFhsCJVJVvwQqDdbDQd
dmnNMlFNvmvljnbpMWNDFQvfQJJGvfPCfHGgQQgcJg
bRVzLBSSTRBRBBrwTrVtRwCfcGHcsJgJgzgGsggHCzcC
ZbtVTTrrqrSSVwhqqwBRwFWMDFNdjdZpWjdDDppjMW
MTzqtbLtwFzJgbHgfbdWWH
VMNBjNVjvNfhhhhfNPhP
jmGMvlDZZnVMtzlwzqqCpwFt
PpzGspGmpPsFLrTnTLzzBg
QCWvfjfWjRPFZgrvqrBvTg
wwNRCNQQVNRWjNWfQbHCCClHGDGJdGhpdhtPGhltDlJD
dhbpGzhllzGlPvnzNcvtNVnc
gcFMsTJDMMwrZqfjjqvvfnPtqJ
sWRWTRFwrTgLDDFWgMsTlpSlpbSCdWWdcbmpChGd
QccdFFFcFbcQPQPHMgpPMp
NJlNSSMLDfJfmlSqHZRNpRqNBRPRPq
LlMmJfvDVVTJSmVMscsCFtvwcjWjrjCj
NVVMGWFSMRVGWSthwhTJWzcJCcJsTs
jqRLqlfRZcmjcCzT
rlRRrdrflpdvPbHpflfPlfDBgBMQpGVQMgpVDGMggBDV
VwRhccRsnQStRhtGQVQVsmjgDgqJdggDjqLDgJlLzmLl
BWFZpWHBNCBCNBzBNvWBpzHZqqlMqgNdlllDdqDgJDLlfDdd
pFbTrrrBzbzTtSwStQnnsrVn
DRfFbFqzbddfPFtsJnJRsnClJRsn
cgjgQgWvSLVQgmWWgWVjVSSSBTltThLnqJssnTCZsTThntZT
qjwpSrmWgcSrGMfdFDFdwHFd
RWjDDWDjDNjjgDtSRRgjcjzFpnzwdFbFNdbFbpnldwFF
vQfPfTQJbZdThTzL
PrBQJQsfQqrrbfmPqMBfJbggjRVgWjttsHRSgRctDjSs
NgqNWqqWWdnJdqpBNFtCmJGCDHttDGDsHsHm
BjvzhRLTrTBQhTMQRjRRcjPGtmDCZZDZSCmmMSSZmVmSSt
vQzRvRzQcPcvfQzRnddppFgnFfWwBFlb
nnPvfvgrtPDHgvvGTRRRPZQGpGCLLV
FlBsBdbllFdfWpbGMCVMZLVbZQ
lhchNcqFsJBlBszztvwHjvzgrzmzffgH
zZhdjTpJJpjmmpPZhvqnnZHqZcggvgMbgv
tFpFQFSFtBGlFNwFfNMnHfbHcnvcvcfvcqrM
GBFlNLSNVGVSSGtQSLLBBlNtphDdzpmmPmTPhRmdzdVCCDdR
rpRCCDLpmnCdJCjn
vMhSFvgsMGLmnmWMmm
wVqFFvwvPPHhFhhgHPwHshpqrDDzqlfRbpftRLblrllr
CRNDzdJCVDWzVgDjdjzRJzWRMTbHsMNZNbZMMbsfhTtMTLMB
wSlwQcSpqPpcqcqFSqpwslsTfZtLhtlthtBHtTMZ
SPGFGFFmpcPGDrWDmjDJVffR
dsmdtJthJphWqHRPnRRsvvnnfR
cDBMDDDlBZglDZTMDfzVvNRrvNPVHzRRTV
PGMCCDClBDDbbFqmmhqQdpWGmmWp
BJjcGhcvCnBdGHsmHSzZDzSDMHmRMQ
qLWPLVrTwWlwwwrfrFfGDNmDQRMbQMzzmmbQLNMM
rVWrFlGqlqwVwVGgWGphnvgBBsnvsjdBnCBnBg
sNNsfBsmcGmgNTcHHSpnTWHnpV
QlrhlrlMglhDQrdFblvFtMdnDWwSHDWWwnTSjLwVDSwwwT
QtdMvltZhbFlPPZbQtQthZQdqCsJJGzBqqCBmCNCqgRCBsfP
SZnQnnHRWRQRVjHnqlJTQPfdlqfJftqG
pDzmbDBFbBLvvzttfdlTTl
gsDLLpcmsSZVwlnRsV
LHsWjwjWqCLsqCHcLsjdLqcdbpMGZPPtBhthbZBpBhMllwPG
VFnVbbvJSfbgphSpGlhRBBSP
JrrTgmFgzvNbrmNnmnvzgTLjCQWDLDCsTjssjqcHLc
QmwwqTqsrdqNNqgtvnVDVcGNNtvv
WBFBpzzjSJBJzJbfntgPzVzcvPnzDf
HcpbHZJBFpjpcSZrZsdRQZrCwrwd
JqmLmbtTWThBTWvWGVSrrVDsSGSG
wwzRzNjNNbsPVPds
jfgQRZwpQclQfffHgpRpwpfTcqtLLqCbbFFFLmbmTTBnFB
fGpcccNNqcctqGMprvMPmbbzFSflSRzPBBlBbS
JCjnjTZTTGPSGmTFPb
ZWHhJjHLDVDgHLLDGjnhctsstwqctNwWqNwwQrtv
sDwQhcwhBDDwrhGsQnRBQHHMHHMNJMZFCFRbCRftMM
zjjlmjqfdTqlWdzTqmLzlzVjNCHJNHNFMFtbJNZgVNMMCCtN
vPTfLmPTLWBsPDnSscnS
ngznwDPPTzhPPDCTQnTTDQBQqHNNrHFVppbbjRFFqFhHqRqr
tZJtcGsGtLLcctRqVBbbqrspbHNq
BmZSvGBMdWPzMPgnnz
MpNWPVNWWZWVVNZHVcvJjgBjJMStMJSjjg
rzdCzrCTTLRCslvJDSjjdScgDm
RLhCQzqTCssThRQzRzwGQrrCFffbfWppNpWNWVcHqZbHpVPp
zQzCVWdSSjCdjpchWcGftflGZcgG
RwnJTJwmvFHTBFmtBccZZfBGMstllM
wwvvHRwqDnHFrmqnrSbQVVQfSbqQjbqjbQ
ttDftStSlftPgSHmJbFwnMnFwzbrLHMMzz
GqTBqhBqBvppBvMMTznrCbCnLwfr
RBjjpZZvvZqGcNhjjpNmDPfDcsgfDfgScsQQQg
rsSFccvBHppHPsvQrSHSprFjnbLGdbzLfbGLLtLjjzLzvl
JWWJhmwwTDTGtnzlhdbtLG
CWNqWRNCwnCJVppQFFFFNrgHBB
MSRVnMjnVRVnPlcsrtMtschgDl
NWHBwJBwBBQCHHqwWQGBNgdrFFtsthcqdltdDsqttq
CCTTGCNCCBfNJNNWbGGnvVzDSRfDRSZvLPSzRn
MpRfjRjWpZzzzRzZSpjzZjTCQcGdHLWNGqdBdcBWWBLccn
lrbrsPQDPQglDtwggcLCqnCdNNdHBLsqNd
blwbJggvgbwlvQbvtgwmvVwRfTzfMMjFVfSFjZjMTSTSzj
ttSGjHWVrwWrWWvhzvhmhDfR
qMBdNNsccQgfDRzRmqlhRl
gQJdfJPdQBsMggMjPrTCLjrGrCrtVT
tGFdlwDwGFdNtStghWWdQFSnTVfCfZhrfVTVCVprnRRhVn
cLsBPQJsQPmbmPHTnRRnHprCVfns
MjmvPqqQjPbQzjLwwDWDSlzSlGSgwl
NSCpFgfbscbZZZwrtgPZJT
zGCQlVGmmQGVqqJwGtHZGrPHHRTH
qQvVmvzmqCdhhjzCQLjljLQMnMDSFWcSfnMfpbfnNcFFbFDN
zFgqjQBmWNlWlfHrHdLc
wnbCpSSZZTJSJSnmdrtHfGtftlcpltpH
ZSwhVPPJgNVmNFzs
WNVJthVHRRfLqpqN
gdCGcCgJBCrgScRLzbjQQLfRRR
SCFdGSFvlhTJsnvW
FFZwFZZwRmFFhHtNLNLGRtsqjLMt
gbDnnrMbMCffMPbPLNjGNlcppNtspp
rgbzrzDrgVgnrBzFWMWmWBwHWHShSB
zjRVjDqzRjvSBnBGGsfsrFsV
fLccLLZpJMctwJWWWJWpJGCwFwsgnngFBPsCnnTBPT
LbJlZNWMtpMlHRNHzdfSDfdj
VGbbnJGSTsVTssTTnVVWMtfBBmvftRHfHBMJJfZp
ghqtrzgPrjdzQCjmZMHfRHZHBmQmmB
gltFtDqFVlTVWlTl
HqNqZDTvNvVTLPSTvzfrfHfdndffwnbdnwrH
MpSJlFcMJmcpFlmClcMcRnWbWtthrnfwnCGrrWfrwC
RjcJJmSFMRQpMRFjMNVvTZjNPPvLTBPBBB
MzClDtlzJzFzNGGm
bjcLRHlTBsFJGmRm
HcPSSfTSpLZLbSwtrtvMnlDCDPCl
gWWgQJCsVhgRLCWsdjpmcBHvfvrrnvCvBB
TqDtztqtStlbNTPtllqZpvmcFHjNjvjNvHvmrrmj
ztPPGZqTPSbJgchGgwRQgQ
wVrdtTqtCCvbNgbNTTDN
mhGzWhGzMGWGrRmbFLBHZRNHNvZvgB
hhGhShpnsSrqVCVSSj
HnlbmGnlHZHnlBcjgwfDVfwLsGLGLDgR
WhWMWTvQPWPLDMFRCDMsVD
QdzJQPSPZqJnJRnZ
TTjTjFBcRBGjwsDTBLmrCftfRVrrCftCVNRP
WnqbJWnnQJhSqVfVPfDnggfrVN
hSlDMllvhbQqllZlSWQdSQTBjsFHBjTwGdHBTBszLzcc
rNWqWDLZWcqFqLLLgQQJnndnQdNzzJVMzd
cPtsPvChtRsGswHPGbwcPcdVnpzvnmBmVvJBJdJVJdzn
PfRfRGtsHsSRftbbbbHhwCCsjZgSTgSZWDTcgDZjLqgqFWLq
BNzPnPJNNMwHJRhBGRWRdjFQddFlFjWd
npbZrgnLSCSrWFjjdlZGlcDF
gqtmmngSbmgHJqfqzNBHBJ
stgzttBPRRRdpSVVpdpS
WJFcLQmJZHcCFLJmcZLMfbpGSWMNpGftSSpMrb
mcvvQvHmtLCJmHZQHZHCDHJJnjqPjjPzwvwhnwPqTjPBzPnB
DDmbbPqgFSbSQPtPQJttrltJ
CRfcnZWmRRhJNVtsVnQlsp
fcBvWvWzcZWCzTTCTTvccFMBHGDdSwGFFbqwFSGSmF
tCRBPCPRjzsJszBmtjmCvSpHcppJpvZdHHHcHZJG
qbrlLnWlQDQDNvmHHHHcrZZvdm
nmnWnnWmgQsCFzFCRVCg
sHMHCDZfcwMcRcLMcZDCRCHMPdJqgjvVdvqgdgfdJbQgvWQb
FFhTzmzGrnmtjTBjBBprrmFtqGgQqvVdPbbgqQQWJvvWJQqV
TrNjrnFSlwNZNlNL
JQGdsdzSzsdFQFSdssnndNlZjNPTJZNljVjTPhVPhT
GgGLfRmHGLhNVjjNTLhV
HvGvwpbHHRwpBrvBgSSzSFndtzndCrsFMd
DptFshMrhDhDwmPPhwSNhmmS
RLdcdRvBjnvRVcvlcLbCcbCwwpGBwSmfZqqPPPPwzmfqZq
VlRLvVjCJLnlpvvRdllLcJJWDHgMMHDDHtWFFDDQgH
SsSdrndpDlCdLftd
VGPVJgmQrVGHHZfwLlfCTmfwlDlT
PcJHcGgcWWbJpjRrphRbFpRn
PdPSMHMLzPPSShBdffMMzMRHQQrpppcqTCQQpCccTGTRCnCQ
vsbWmFbmJmZFFsmsbfpGVrGnWrrpVpnnVcTV
JZslstfZNNSSPdlSMwlM
bLLzRzZLbRqJJrDGGVZdwssDvGQw
FCtNJlTFtmPfldSvDvQFVVsjSv
PmCPHBhhPpWLWgzgHJ
qwmwFHCgPgPPqPwMCrHHFBVVRBttVRRffVfmsjVNNB
WSvcSnvbSWbhcbjlQbvlSQhlfBGcspVVsVGfVscpzpNcpBtN
hJSLhlvlTjPFHMLCCq
bggDpTggncGVVWbQcG
sRvSwwwFBSpFzvRvMFZqmPmMVqmcmPPVqhqqWq
SRBBrFZZwrddBFRjlptnLgDnTggdtd
PPfMcZMflbMQcMllPVfTVMwjWWmZvpWWpWhhjjpdWWww
sDQNnzsnQgDNsFzFqtGjGmWWSpWrGhdpvphdSW
nNQNqLBHLqzDnHgnVJfPJPCRBbfCcJlT
fppppWsjcSDPjjDpGhgwbfTgHTCbHJwbHbTR
rLBdQnvMNMmFPbLqHqTqgLHCgL
nrFznvMNMQdttrBcScsDstWcPGtWSc
lclnRSDnGZtvSwnZDZzhLffqdsCNwTBCBBdNsd
mPjmjmrFFpmQjMJQjlNdlhCsCLsTlNLs
ggmrHHVVQVPJpWrgpWScRvzZzGGRnZvlgzZn
GjGJGQJGcMTVfFDQzNVQzP
mHqdbmmdnJqVzVhRVNzPbR
wStmHJsJsLZLjTvM
QssMbVGdMQjZPjwVwHVZPZClllvgSgvlTgwwSSCgSCtC
WmmFBmJrcFRBFrJJBFchzWCStgCTgvhvTlfsNqfTlvTv
sFzzssDLzrBPjDVVddHMQD
fztDZSGrNrlnbnPTgFFpln
jvvQMMcLcjJmQwHdJvjQJnnbTbRFRphnnpsWgmFRPR
vTLHHCQLHBBjJCSZrVCZtSfSfrft
gHfHffHLjwHrRjLrLRZVMnTdTBsNTBwTVBsBnN
DWPhqhhDhvSGvWPzSzMBQBQVMMBBmvssvQvQ
CDGbqCDbChSbWGrHcHRgbcVcfrLJ
frlTLmtllbbbdpJS
qFjhzjThjHTFGHTjqhhjMzBhVpVpdbBnSJQRpBnVVdbRRQJd
vjWPWjWPPPWgwmfCrNvTvZ`;
// console.log(findAllPriorities(puzzleInput));
console.log(findGroupPriority(puzzleInput));